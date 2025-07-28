import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function Mainslide(){
	
	const swiperStyle = {
		width: '100vw',
		height: '400px',
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
				<SwiperSlide><img src="/images/mainbanner1.jpg" alt="slide1"/></SwiperSlide>
				<SwiperSlide><img src="/images/mainbanner2.jpeg" alt="slide2"/></SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Mainslide;