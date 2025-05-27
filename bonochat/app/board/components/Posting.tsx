'use client';

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import gsap from 'gsap';

interface User {
  name: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

interface PostingProps {
  user: User | null;
  onPostSubmit: (data: Post) => void;
}

const Posting: React.FC<PostingProps> = ({ user, onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '';

    const res = await axios.post(`${apiUrl}/posts`, {
      title,
      content,
      author: user?.name || '익명',
    });

    onPostSubmit(res.data);
    setTitle('');
    setContent('');

    gsap.to('.postpage', { top: '100%', duration: 0.5 });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data?.error || '글 등록 실패');
    } else {
      alert('글 등록 실패');
    }
  }
};


  const handleBackClick = () => {
    gsap.to('.postpage', { top: '100%', duration: 0.5 });
  };

  return (
    <div className="postpage">
      <a
        role="button"
        tabIndex={0}
        className="postback"
        onClick={handleBackClick}
        onKeyDown={(e) => e.key === 'Enter' && handleBackClick()}
      >
        뒤로가기
      </a>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">게시글 추가</button>
      </form>
    </div>
  );
};

export default Posting;
