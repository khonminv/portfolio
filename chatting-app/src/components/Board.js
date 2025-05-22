import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posting from './Posting';
import Posted from './Posted';
import gsap from 'gsap';

function Board({ user }) {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
	const [selectedPost, setSelectedPost] = useState(null);

    const fetchPosts = async (pageNum) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts?page=${pageNum}`);
            setPosts(res.data.posts);
            setTotalPages(res.data.totalPages);
            setPage(res.data.currentPage);
        } catch (err) {
            console.error('게시글 불러오기 실패:', err);
        }
    };

    useEffect(() => {
        fetchPosts(page);
    }, []);

    const handlePageChange = (newPage) => {
        fetchPosts(newPage);
    };

    const handleNewPost = (newPost) => {
        fetchPosts(1); // 새 글 등록 시 첫 페이지로
    };

    return (
        <section id='board'>
            <div className='b_header'>
                <h1>게시판</h1>
                <button className='postingbtn'>글쓰기</button>
            </div>
            <Posting user={user} onPostSubmit={handleNewPost} />
            <ul className='postlist'>
				<b><h4>제목</h4><span>작성자</span></b>
                {posts.map((post, index) => (
                    <li key={index}>
						 <a
							onClick={() => {
								setSelectedPost(post);
								gsap.to(".posted", { top: 0, duration: 0.5 });
							}}
						>
							<h3>{post.title}</h3>
							<small>{post.author}</small>
						</a>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        disabled={page === i + 1}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
			 <Posted
                title={selectedPost?.title}
                author={selectedPost?.author}
                content={selectedPost?.content}
            />
        </section>
    );
}

export default Board;
