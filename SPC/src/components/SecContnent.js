import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../data';

function SecContnent(){
	return(
		<>
			{data.section.content.map((d,i)=> 
				<div key={i+1} className="content">
					<div className="left">
						<h3>{d.h3}</h3>
						<p>{d.p}</p>
						<span>{d.span}</span>
						<div className="button">
							<a href="">
								바로가기
							</a>
						</div>
					</div>
					<div className="right">
						<Slide d={d}/>
					</div>
					<div className="content_mobile">
						<h3>{d.h3}</h3>
						<p>{d.p}</p>
						<span>{d.span}</span>
						<Slide d={d}/>
						<div className="button">
							<a href="">
								바로가기
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
	
}
function Slide({d}){

	return(
		<>

				<Swiper
				spaceBetween={20}
				slidesPerView={3.5}
				initialSlide={1}
				centeredSlides={true}
				onSlideChange={(swiper) => {
					if (swiper.activeIndex === 0) {
					swiper.slideTo(1);
					}
				}}
				>
					{
						d.image.map((d2,j) => <SwiperSlide key={j+1}><img src={`/images/${d2}`} alt={d2.split(".")[0]}/></SwiperSlide>)
					}
				</Swiper>
		</>
	)
}

export default SecContnent;