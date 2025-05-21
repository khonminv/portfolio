import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// 환경에 따라 소켓 URL 설정
const API_URL = process.env.REACT_APP_API_URL;
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3002';	
const socket = io(SOCKET_URL);

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState('');
    const [chat, setChat] = useState('');
	

    useEffect(() => {
        // 이전 메시지 로드
        socket.on('load messages', (loadedMessages) => {
            setMessages(loadedMessages);
        });

        // 새로운 메시지 수신
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

		socket.on('message deleted', (deletedId) => {
			setMessages((prevMessages) =>
				prevMessages.filter((msg) => msg._id !== deletedId)
			);
		});

        return () => {
            socket.off('load messages');
            socket.off('chat message');
			socket.off('message deleted');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (chat && name) {
            socket.emit('chat message', { name, message: chat });
            setChat('');
        } else {
            alert('이름과 메시지를 입력하이소');
            return;
        }
    };

   const handleDelete = (messageId) => {
		fetch(`${API_URL}/messages/${messageId}`, {
			method: 'DELETE',
		})
		.catch(err => {
			console.error('Error deleting message:', err);
		});
	};


    return (
        <div className='wrapper'>
            <ul className='message'>
                {messages.map((msg, index) => (
                    <li key={msg._id}>
                        <strong>{msg.name}: </strong>{msg.message}
                       <span onClick={() => handleDelete(msg._id)}>삭제</span>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름"
                />
                <input
                    id='text'
                    type="text"
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                    placeholder="메시지"
                />
                <button type="submit">전송</button>
            </form>
        </div>
    );
};

export default Chat;