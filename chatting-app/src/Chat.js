import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('https://port-0-portfolio-mawa5o8ve8151a2a.sel4.cloudtype.app/');

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState(''); // 문자열로 변경
    const [chat, setChat] = useState('');

    useEffect(() => {
        // 이전 메시지 로드
        socket.on('load messages', (loadedMessages) => {
            setMessages(loadedMessages);
        });

        // 새로운 메시지 수신
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]); // 메시지를 그대로 추가
        });

        return () => {
            socket.off('load messages');
            socket.off('chat message');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (chat && name) { // 이름이 비어있지 않은지 확인
            socket.emit('chat message', { name, message: chat }); // 이름과 메시지를 함께 전송
            setChat('');
        }else if (!name || !chat) { // name 또는 chat이 비어있으면
			alert('이름과 메시지를 입력하이소'); // 경고 메시지 표시
			return;
		}
    };

    return (
        <div className='wrapper'>
            <ul className='message'>
                {messages.map((msg, index) => (
                    <li key={index}><strong>{msg.name}: </strong>{msg.message}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)} // 이름 입력 처리
                    placeholder="이름"
                />
                <input
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