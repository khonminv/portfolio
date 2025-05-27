'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import Posting from './components/Posting';
import Posted from './components/Posted';
import { useUser } from '../context/UserContext';


interface Post {
  _id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}


export default function Board() {
	const {user} = useUser();
	const [posts, setPosts] = useState<Post[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);

	const API_URL = process.env.NEXT_PUBLIC_API_URL;

	const postDate = (isoString: string): string => {
		const date = new Date(isoString);
		return date.toLocaleDateString();
	};

	const fetchPosts = async (pageNum: number) => {
		try {
		const res = await axios.get(`${API_URL}/posts?page=${pageNum}`);
		setPosts(res.data.posts);
		setTotalPages(res.data.totalPages);
		setPage(res.data.currentPage);
		} catch (err) {
		console.error('게시글 불러오기 실패:', err);
		}
	};

	useEffect(() => {
		fetchPosts(1); // 최초 로딩 시 1페이지
	}, []);

	const handlePageChange = (newPage: number) => {
		fetchPosts(newPage);
	};

	const handleNewPost = () => {
		fetchPosts(1);
	};

	return (
		<section id="board">
		<div className="b_header">
			<h1>게시판</h1>
			<button className="postingbtn" onClick={() => gsap.to(".postpage",{top:0,duration:0.5})}>글쓰기</button>
		</div>

		<Posting user={user} onPostSubmit={handleNewPost} />

		<table className="postlist">
			<thead>
			<tr>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일</th>
			</tr>
			</thead>
			<tbody>
			{posts.map((post, index) => (
				<tr
				key={index}
				onClick={() => {
					setSelectedPost(post);
					gsap.to('.posted', { top: 0, duration: 0.5 });
				}}
				>
				<td>{post.title}</td>
				<td>{post.author}</td>
				<td>{postDate(post.createdAt)}</td>
				</tr>
			))}
			</tbody>
		</table>

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
			createdAt={selectedPost?.createdAt}
		/>
		</section>
	);
	}
