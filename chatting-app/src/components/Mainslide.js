import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function Mainslide(){
	
	const swiperStyle = {
		width: '100vw',
		height: '500px',
	};
	

	return(
		<div className="main">
			<Swiper
				modules={[Autoplay]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				loop={true}
				style={swiperStyle}
			>
				<SwiperSlide><img src="/images/slide1.jpg" alt="slide1"/></SwiperSlide>
				<SwiperSlide><img src="/images/slide2.jpg" alt="slide1"/></SwiperSlide>
				<SwiperSlide><img src="/images/slide3.jpg" alt="slide1"/></SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Mainslide;