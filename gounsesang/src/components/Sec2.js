import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Sec2(p){

	return(
		<section id="sec2">
			<div className="text_box">
				<strong>03</strong>
				<span>Gowoonsesang Cosmetics</span>
				<h4>{p.props2}</h4>
				<div className="more_btn">
					<a href="">
						<p>view more</p>
						<div className="viewmore">
							<img src="/images/more-btn.png" alt="more-btn"/>
						</div>
					</a>
				</div>
			</div>
			<Swiper
				slidesPerView = {5}
				spaceBetween = {60}
				loop = {true}
				observer = {true}
				breakpoints = {{
						989: {spaceBetween: 80}
				}}
			>
				{
					p.props.map((d,i)=>
						<SwiperSlide  key={i} className='swiper-slide'>
							<a href="">
								<div className="img_box">
									<img src={`/images/${d.img}`} alt={d.img.split(".")[0]}/>
								</div>
								<div className="text_box">
									<span>{d.text.span}</span>
									<h5>{d.text.h5}</h5>
									<p>view more</p>
								</div>
							</a>
						</SwiperSlide>
					)
				}
			</Swiper>
			<div className="sec2_bg">
				<img src="/images/main-story-bg.png" alt="main-mentor-bg"/>
			</div>
			<div className="cursor-i">
				<img src="/images/href-i02.png" alt="href-i02"/>
			</div>
		</section>
	)
}

export default Sec2;