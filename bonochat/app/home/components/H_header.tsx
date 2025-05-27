'use client';

import React from 'react';
import { useUser } from '@/app/context/UserContext';
import Link from 'next/link';


export default function H_header() {
  const { user, logout } = useUser();

  if (user) {
	return (
	  <div>
		<p>{user.name}님 환영합니다</p>
		<button onClick={logout}>로그아웃</button>
	  </div>
	);
  }

  return (
	<div>
		<h2>로그인 해주세요.</h2>
		<Link href="/login" className="btn">로그인</Link>
		<Link href="/register" className="btn">회원가입</Link>
	</div>
  );
}
