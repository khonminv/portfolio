function Brand(){
	return(
		<div className="content" id="brand">
						<div className="left">
							<h3>BRAND</h3>
							<p>브랜드</p>
							<span>SPC그룹의 다양한 브랜드를 만나보세요.</span>
							<div className="button">
								<a href="">
									바로가기
								</a>
							</div>
						</div>
						<div className="right">
							<div className="swiper brand_slider">
								<div className="swiper-wrapper">
								  <div className="swiper-slide"><img src="/images/paris.png" alt="paris"/></div>
								  <div className="swiper-slide"><img src="/images/beskin.png" alt="beskin"/></div>
								  <div className="swiper-slide"><img src="/images/3rip.png" alt="3rip"/></div>
								  <div className="swiper-slide"><img src="/images/dunkin.png" alt="dunkin"/></div>
								</div>
							</div>
						</div>
						<div className="content_mobile">
							<h3>BRAND</h3>
							<p>브랜드</p>
							<span>SPC그룹의 다양한 브랜드를 만나보세요.</span>
							<div className="swiper brand_slider">
								<div className="swiper-wrapper">
								  <div className="swiper-slide"><img src="/images/paris.png" alt="paris"/></div>
								  <div className="swiper-slide"><img src="/images/beskin.png" alt="beskin"/></div>
								  <div className="swiper-slide"><img src="/images/3rip.png" alt="3rip"/></div>
								  <div className="swiper-slide"><img src="/images/dunkin.png" alt="dunkin"/></div>
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

export default Brand;