'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const porolySliderStyle: React.CSSProperties = {
  height: '80%',
  // Swiper가 내부 div에 높이를 주므로 기본적으로 objectFit은 이미지에 적용
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

export default function Nubury() {
  return (
    <Swiper loop={true} slidesPerView={3} spaceBetween={30} style={porolySliderStyle}>
      <SwiperSlide>
        <Image src="/images/wikid.jpeg" alt="poroly1" style={imageStyle} width={150} height={300} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/thecrow.jpeg" alt="poroly2" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/redwon.jpeg" alt="poroly3" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/hellboy.jpeg" alt="poroly4" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/immoohye.jpeg" alt="poroly5" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/wingka.jpeg" alt="poroly5" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
    </Swiper>
  );
}
