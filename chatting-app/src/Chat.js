import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('https://port-0-portfolio-mawa5o8ve8151a2a.sel4.cloudtype.app/');

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

        return () => {
            socket.off('load messages');
            socket.off('chat message');
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

    const handleDelete = (index) => {
        setMessages((prevMessages) => {
            const newMessages = [...prevMessages];
            newMessages.splice(index, 1); // 해당 인덱스의 메시지 삭제
            return newMessages;
        });
    };

    return (
        <div className='wrapper'>
            <ul className='message'>
				{/* <li id='test'>
                        <strong>dlfma: </strong>zxc
                        <span onClick={() => handleDelete()} style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}>삭제</span>
                    </li> */}
                {messages.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.name}: </strong>{msg.message}
                        <span onClick={() => handleDelete(index)} style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}>삭제</span>
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