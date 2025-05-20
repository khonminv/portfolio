import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3002');

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // 이전 메시지 로드
        socket.on('load messages', (loadedMessages) => {
            setMessages(loadedMessages);
        });

        // 새로운 메시지 수신
         socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, { message: msg }]);
        });

        return () => {
            socket.off('load messages');
            socket.off('chat message');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            socket.emit('chat message', input);
            setInput('');
        }
    };

    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg.message}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;