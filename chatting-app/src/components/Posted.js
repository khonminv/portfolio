import React from 'react';
import gsap from 'gsap';

function Posted({ title, author, content }) {
    if (!title) return null;

    return (
        <div className="posted">
            <h2>{title}</h2>
			<span onClick={()=> {gsap.to(".posted", { top: "100%", duration: 0.5 });}}>뒤로가기</span>
            <small>{author}</small>
            <p>{content}</p>
        </div>
    );
}

export default Posted;