'use client';

import React from 'react';
import gsap from 'gsap';

interface PostedProps {
  title?: string;
  author?: string;
  content?: string;
  createdAt?: string;
}

const formatPostDate = (isoString?: string) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleString();
};

const Posted: React.FC<PostedProps> = ({ title, author, content, createdAt }) => {
  if (!title) return null;

  const handleBackClick = () => {
    gsap.to('.posted', { top: '100%', duration: 0.5 });
  };

  return (
    <div className="posted">
      <div className="postedTop">
        <span role="button" tabIndex={0} onClick={handleBackClick} onKeyDown={(e) => e.key === 'Enter' && handleBackClick()}>
          뒤로가기
        </span>
      </div>
      <div className="postedMid">
        <h2>{title}</h2>
        <small>{formatPostDate(createdAt)}</small>
        <small>{author}</small>
      </div>
      <div className="postedBot">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Posted;
