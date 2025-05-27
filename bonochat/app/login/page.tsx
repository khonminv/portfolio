'use client';

import React from 'react';
import LoginForm from './components/LoginForm';
import { useUser } from '../context/UserContext';
import Link from 'next/link';


export default function LoginPage() {
  const { user, logout } = useUser();

  if (user) {
    return (
      <div className='loginform'>
        <p>{user.name}님 환영합니다</p>
        <button onClick={logout}>로그아웃</button>
		<Link href="/home">뒤로가기</Link>
      </div>
    );
  }

  return (
    <div className='loginform'>
		<div className='plzlogin'>
			<h2>로그인 해주세요.</h2>
	  		<Link href="/home">뒤로가기</Link>
		</div>
      	<LoginForm />
    </div>
  );
}
