function Sec_Coffee(){
	return(
		<div className="content" id="coffee">
						<div className="left">
							<h3>Coffee & Drinkables</h3>
							<p>커피와 음료</p>
							<span>상쾌함과 깊이를 동시에 느끼며, <br/> 나만의 여유를 채웁니다..</span>
							<div className="button">
								<a href="">
									바로가기
								</a>
							</div>
						</div>
						<div className="right">
							<div className="swiper drink_slider">
								<div className="swiper-wrapper">
								  <div className="swiper-slide"><img src="/images/drink1.jpg" alt="drink1"/></div>
								  <div className="swiper-slide"><img src="/images/drink2.jpg" alt="drink2"/></div>
								  <div className="swiper-slide"><img src="/images/drink3.jpg" alt="drink3"/></div>
								  <div className="swiper-slide"><img src="/images/drink4.jpg" alt="drink4"/></div>
								</div>
							</div>
						</div>
						<div className="content_mobile">
							<h3>Coffee & Drinkables</h3>
							<p>커피와 음료</p>
							<span>상쾌함과 깊이를 동시에 느끼며, <br/> 나만의 여유를 채웁니다..</span>
							<div className="swiper drink_slider">
								<div className="swiper-wrapper">
								  <div className="swiper-slide"><img src="/images/drink1.jpg" alt="drink1"/></div>
								  <div className="swiper-slide"><img src="/images/drink2.jpg" alt="drink2"/></div>
								  <div className="swiper-slide"><img src="/images/drink3.jpg" alt="drink3"/></div>
								  <div className="swiper-slide"><img src="/images/drink4.jpg" alt="drink4"/></div>
								</div>
							</div>
							<div className="button">
								<a href="">
									바로가기
								</a>
							</div>
						</div>
					</div>
	);
}

export default Sec_Coffee;