'use client';

import React from 'react';
import RegisterForm from './components/RegisterForm';
import { useUser } from '../context/UserContext';
import Link from 'next/link';


export default function RegisterPage() {
	const { user } = useUser();
	

	if (user) {
		return (
			<>
				<p>{user.name}님 이미 로그인 되어있습니다.</p>
				<Link href="/home">뒤로가기</Link>
			</>
		);
	}

	return (
		<div>
		<h2>회원가입 페이지</h2>
		<RegisterForm />
		<Link href="/home">뒤로가기</Link>
		</div>
	);
}
