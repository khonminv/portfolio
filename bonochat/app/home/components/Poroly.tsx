'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const porolySliderStyle: React.CSSProperties = {
  height: '150px',
  // Swiper가 내부 div에 높이를 주므로 기본적으로 objectFit은 이미지에 적용
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

export default function Poroly() {
  return (
    <Swiper loop={true} slidesPerView={3} spaceBetween={10} style={porolySliderStyle}>
      <SwiperSlide>
        <Image src="/images/poroly1.jpg" alt="poroly1" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/poroly2.jpg" alt="poroly2" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/poroly3.jpg" alt="poroly3" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/poroly4.jpg" alt="poroly4" style={imageStyle} width={300} height={150} />
      </SwiperSlide>
    </Swiper>
  );
}
