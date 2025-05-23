import React, { useState } from 'react';
import axios from 'axios';

function Posting({ user, onPostSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts` , {
                title,
                content,
                author: user?.name || '익명',
            });
            onPostSubmit(res.data);
            setTitle('');
            setContent('');
        } catch (err) {
            console.error('글 등록 실패:', err);
            alert('글 등록에 실패했습니다.');
        }
    };

    return (
        <div className='postpage'>
            <a className='postback'>뒤로가기</a>
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
}


export default Posting;
