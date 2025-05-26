import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Poroly(){
	let porolySlider = {
		height : "150px",
		objectFit : "cover"
	}
	const imageStyle = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		display: "block"
	};

	return(
		<>
			<Swiper
				loop={true}
				slidesPerView={3}
				spaceBetween={10}
				style={porolySlider}
			>
				<SwiperSlide><img style={imageStyle} src="/images/poroly1.jpg" alt="poroly1"/></SwiperSlide>
				<SwiperSlide><img style={imageStyle} src="/images/poroly2.jpg" alt="poroly2"/></SwiperSlide>
				<SwiperSlide><img style={imageStyle} src="/images/poroly3.jpg" alt="poroly3"/></SwiperSlide>
				<SwiperSlide><img style={imageStyle} src="/images/poroly4.jpg" alt="poroly4"/></SwiperSlide>
			</Swiper>
		</>
	)
}

export default Poroly;