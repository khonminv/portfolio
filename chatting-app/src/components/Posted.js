import React from 'react';
import gsap from 'gsap';

function Posted({ title, author, content }) {
    if (!title) return null;

    return (
        <div className="posted">
			<div className='postedTop'>
				<span onClick={() => {gsap.to(".posted", { top: "100%", duration: 0.5 });}}>뒤로가기</span>
			</div>
			<div className='postedMid'>
				<h2>{title}</h2>
           		<small>{author}</small>
			</div>
			<div className='postedBot'>
          	  	<p>{content}</p>
			</div>

        </div>
    );
}

export default Posted;