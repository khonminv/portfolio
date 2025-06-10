'use client';

import { useEffect, useState, useRef } from 'react';
import { useSocket } from '../context/SocketContext';
import { useUser } from '../context/UserContext';

interface Message {
  _id: string;
  name: string;
  message: string;
}

export default function Chat() {
	const { socket } = useSocket();
	const { user } = useUser();
	const messagesEndRef = useRef<HTMLUListElement>(null);
	const [messages, setMessages] = useState<Message[]>([]);
	const [chat, setChat] = useState('');

	useEffect(() => {
		if (!socket) return;

		const loadMessagesHandler = (loadedMessages: Message[]) => {
			setMessages(loadedMessages);
			console.log("불러와잇")
		};
		const chatMessageHandler = (msg: Message) => {
			setMessages((prev) => [...prev, msg]);
			console.log("보내잇")
		};
		const messageDeletedHandler = (deletedId: string) => {
			setMessages((prev) => prev.filter((msg) => msg._id !== deletedId));
		};

		socket.on('load messages', loadMessagesHandler);
		socket.on('chat message', chatMessageHandler);
		socket.on('message deleted', messageDeletedHandler);

		// 최초 로드 요청
		socket.emit('load messages');

		return () => {
		socket.off('load messages', loadMessagesHandler);
		socket.off('chat message', chatMessageHandler);
		socket.off('message deleted', messageDeletedHandler);
		};
	}, [socket]);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
		}
	}, [messages]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (chat.trim() && user?.name && socket) {
		socket.emit('chat message', { name: user.name, message: chat });
		setChat('');
		}
	};

	return (
		<section id="chat">
		<ul className="message" ref={messagesEndRef}>
			{!user && <small style={{ color: 'red' }}>로그인 후 채팅을 이용할 수 있습니다.</small>}
			{messages.map((msg) => (
			<li key={msg._id}>
				<strong>{msg.name}: </strong>
				<p>{msg.message}</p>
				{user && msg.name === user.name && (
				<span onClick={() => {
					fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages/${msg._id}`, { method: 'DELETE' })
					.catch(console.error);
				}}>삭제</span>
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
	}
