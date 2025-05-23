import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Poroly(){
	let porolySlider = {
		height : "150px",
		objectFit : "cover"
	}
	let sliderStyle = {
		objectFit: "cover",
		display: "block"
	}

	return(
		<>
			<Swiper
				loop={true}
				slidesPerView={3}
				spaceBetween={10}
				style={porolySlider}
			>
				<SwiperSlide style={sliderStyle}><img src="/images/poroly1.jpg" alt="poroly1"/></SwiperSlide>
				<SwiperSlide><img src="/images/poroly2.jpg" alt="poroly2"/></SwiperSlide>
				<SwiperSlide><img src="/images/poroly3.jpg" alt="poroly3"/></SwiperSlide>
				<SwiperSlide><img src="/images/poroly4.jpg" alt="poroly4"/></SwiperSlide>
			</Swiper>
		</>
	)
}

export default Poroly;