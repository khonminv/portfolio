import Login from "./Login";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Home({ user, setUser, onLogout }) {
	const swiperStyle = {
		width: '100vw',
		height: '500px',
	};
	


    return (
        <section id="home">
			<div className="h_header">
				{
					user?
					(
						<div className="logbox">
							<p>{`${user.name}님 환영합니다`}</p>
							<button onClick={onLogout}>로그아웃</button>
						</div>
					):
					(
						<div className="logbox"><p>로그인 해주세요</p></div>
					)
				}
				<Login onLogin={(user) => setUser(user)} />
			</div>
			<div className="main">
				<Swiper
					modules={Autoplay}
					autoplay={true}
					style={swiperStyle}
				>
					<SwiperSlide><img src="/images/slide1.jpg" alt="slide1"/></SwiperSlide>
					<SwiperSlide><img src="/images/slide2.jpg" alt="slide1"/></SwiperSlide>
					<SwiperSlide><img src="/images/slide3.jpg" alt="slide1"/></SwiperSlide>
				</Swiper>
			</div>
			
        </section>
    );
}
export default Home;
