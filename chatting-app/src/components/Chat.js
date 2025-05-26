import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import gsap from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const API_URL = process.env.REACT_APP_API_URL;
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3002';
const socket = io(SOCKET_URL);

const Chat = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState('');

    useEffect(() => {
        socket.on('load messages', (loadedMessages) => {
            setMessages(loadedMessages);
        });

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
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (chat && user?.name) {
            socket.emit('chat message', { name: user.name, message: chat });
            setChat('');
        }
    };

    const handleDelete = (messageId) => {
        fetch(`${API_URL}/messages/${messageId}`, {
            method: 'DELETE',
        }).catch((err) => {
            console.error('Error deleting message:', err);
        });
    };

    return (
        <section id="chat">
            <ul className="message">
				{!user && <small style={{ color: 'red' }}>로그인 후 채팅을 이용할 수 있습니다.</small>}
                {messages.map((msg) => (
                    <li key={msg._id}>
                        <strong>{msg.name}: </strong>
                       	<p>{msg.message}</p>
                        {user && msg.name === user.name && (
							<span onClick={() => handleDelete(msg._id)}>
								삭제
							</span>
						)}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					value={chat}
					onChange={(e) => setChat(e.target.value)}
					placeholder="메시지"
					disabled={!user}
				/>
				<button type="submit" disabled={!user || !chat.trim()}>
					전송
				</button>
			</form>
        </section>
    );
};

export default Chat;
