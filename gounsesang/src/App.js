import './css/style.css';
import Line from './components/Line';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
	<>
	<Line />
	<div className="wrapper">
		<div className="cursor"></div>
		<Header />
		<Main />
			<section id="sec1">
				<div className="inr">
					<div className="left">
						<div className="img_box">
							<img src="/images/DRG.jpg" alt="DRG"/>
							<div className="viewmore">
								<a href=""><img src="/images/more-btn.png" alt="more-btn"/></a>
							</div>
						</div>
						
					</div>
					<div className="right">
						<div className="right_top">
							<strong>02</strong>
							<span>Gowoonsesang Cosmetics</span>
						</div>
						<h4>My Skin Mentor <br/> Dr.G</h4>
						<p>
							피부고민, 바르게 답하다. <br/>
							고운세상코스메틱의 대표 더마코스메틱 브랜드 닥터지(Dr.G)는 <br/>
							피부고민에 대한 진심 어린 공감과 피부과학을 <br/>
							기반으로 건강한 아름다움을 추구합니다. <br/>
							수만 건의 피부고민 데이터를 바탕으로 피부 타입 별 진단과 <br/>
							솔루션을 제공하며, 민감성 피부도 안심하고 사용할 수 있는 <br/>
							제품을 개발하는 '정통 피부과학 브랜드'입니다.
						</p>
					</div>
					<div className="sec1_bg">
						<img src="/images/main-mentor-bg.png" alt="main-mentor-bg"/>
					</div>
				</div>
			</section>
			<section id="sec2">
				<div className="text_box">
					<strong>03</strong>
					<span>Gowoonsesang Cosmetics</span>
					<h4>고운세상 이야기</h4>
					<div className="more_btn">
						<a href="">
							<p>view more</p>
							<div className="viewmore">
								<img src="/images/more-btn.png" alt="more-btn"/>
							</div>
						</a>
					</div>
				</div>
				<div className="swiper mySwiper">
					<div className="swiper-wrapper">
					  <div className="swiper-slide">
						<a href="">
							<div className="img_box">
								<img src="/images/slide1.jpg" alt="slide1"/>
							</div>
							<div className="text_box">
								<span>2023-08-02</span>
								<h5>[이코노믹리뷰] “송중기 화장품과 어깨 나란히”…90년대생이 뭉쳐 만든 브랜드 ‘대박’</h5>
								<p>view more</p>
							</div>
						</a>
					  </div>
					  <div className="swiper-slide">
						<a href="">
							<div className="img_box">
								<img src="/images/slide2.jpg" alt="slide2"/>
							</div>
							<div className="text_box">
								<span>2023-06-01</span>
								<h5>[이데일리TV] 고운세상의 특별한 채용콘서트...화장품 회사에 남학생 줄 서는 까닭은?</h5>
								<p>view more</p>
							</div>
						</a>
					  </div>
					  <div className="swiper-slide">
						<a href="">
							<div className="img_box">
								<img src="/images/slide3.jpg" alt="slide3"/>
							</div>
							<div className="text_box">
								<span>2023-04-17</span>
								<h5>닥터지, 말레이시아 대형 쇼핑몰 입점…말레이시아 시장 본격 공략</h5>
								<p>view more</p>
							</div>
						</a>
					  </div>
					  <div className="swiper-slide">
						<a href="">
							<div className="img_box">
								<img src="/images/slide4.jpg" alt="slide4"/>
							</div>
							<div className="text_box">
								<span>2023-03-30</span>
								<h5>[월간인재경영 4월호] 지속 성장의 힘, 의미가 일하게 하라!</h5>
								<p>view more</p>
							</div>
						</a>
					  </div>
					  <div className="swiper-slide">
						<a href="">
							<div className="img_box">
								<img src="/images/slide5.jpg" alt="slide5"/>
							</div>
							<div className="text_box">
								<span>2023-03-23</span>
								<h5>닥터지, 선케어 제품으로 일본과 베트남 시장서 입지 확대</h5>
								<p>view more</p>
							</div>
						</a>
					  </div>
					  <div className="swiper-slide">
						<a href="">
							<div className="img_box">
								<img src="/images/slide6.jpg" alt="slide6"/>
							</div>
							<div className="text_box">
								<span>2023-03-08</span>
								<h5>고운세상코스메틱의 HR 전략, “구성원 성장 지원에 더욱 집중”</h5>
								<p>view more</p>
							</div>
						</a>
					  </div>
					  <div className="swiper-slide">
						<a href="">
							<div className="img_box">
								<img src="/images/slide7.jpg" alt="slide7"/>
							</div>
							<div className="text_box">
								<span>2023-02-27</span>
								<h5>고운세상코스메틱, 3년 연속 ‘대한민국 일하기 좋은 기업’ 선정</h5>
								<p>view more</p>
							</div>
						</a>
					  </div>
					  <div className="swiper-slide">
						<a href="">
							<div className="img_box">
								<img src="/images/slide8.jpg" alt="slide8"/>
							</div>
							<div className="text_box">
								<span>2023-02-23</span>
								<h5>[MI인터뷰] 이은지 비비드로우 팀장 “우리 제품이 고객의 삶을 윤택하게 할 때 큰 보람”</h5>
								<p>view more</p>
							</div>
						</a>
					  </div>
					</div>
				  </div>
				<div className="sec2_bg">
					<img src="/images/main-story-bg.png" alt="main-mentor-bg"/>
				</div>
				<div className="cursor-i">
					<img src="/images/href-i02.png" alt="href-i02"/>
				</div>
			</section>
			<section id="sec3">
				<div className="sec3_top">
					<div className="text_box">
						<strong>04</strong>
						<span>Gowoonsesang Cosmetics</span>
						<h4>고운세상 사회공헌</h4>
					</div>
					<div className="more_btn">
						<a href="">
							<p>view more</p>
							<div className="viewmore">
								<img src="/images/more-btn.png" alt="more-btn"/>
							</div>
						</a>
					</div>
				</div>
				<div className="sec3_bot">
					<ul>
						<li>
							<a href="">
								<div className="img_box"><img src="/images/Cosmetics1.jpg" alt="Cosmetics1"/></div>
								<div className="text_box">
									<h4>점자 표기</h4>
									<span>
										닥터지는 누구나 원하는 제품을 선택하고 소비자의 권리를 누릴 자격이 있다고 생각합니다. 
										시각 장애인 고객의 제품 사용 어려움을 개선하고자 2012년부터 단상자에 제품 유형을 점자로 표기하고 있습니다.
									</span>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div className="img_box"><img src="/images/Cosmetics2.jpg" alt="Cosmetics2"/></div>
								<div className="text_box">
									<h4>초록우산 정기 후원</h4>
									<span>
										닥터지는 피부 고민으로 어려움을 겪는 어린이들을 돕기 위해 초록우산 어린이재단과 인연을 맺고 2019년부터 정기적인 후원을 하고 있습니다. 지난 2020년에는 유아용 선케어 ‘닥터지 베이비 마일드 업 선’ 제품 판매액의 10% 기부하는 프로젝트도 전개했습니다. 해당 제품의 용기와 패키지에는 초록우산 어린이재단과 함께 하는 아이들이 직접 그린 그림도 담아 기업의 진정성을 더했습니다.
 										2021년에도 총 5,000만 원의 지원금을 전달했으며 지속해서 치료에 필요한 물품을 적극 지원할 예정입니다.
									</span>
								</div>
							</a>
						</li>
						<li>
							<a href="">
								<div className="img_box"><img src="/images/Cosmetics3.jpg" alt="Cosmetics3"/></div>
								<div className="text_box">
									<h4>피부과학연구재단 정기 지원</h4>
									<span>
										국내 피부과학 연구 역량과 경쟁력 향상을 위한 지원을 이어가고 있습니다. 2020년부터 피부과학연구재단에 매년 5,000만 원의 연구비를 국내 피부과 전공의와 교수들의 학술 지원과 피부 과학 연구를 위해 지원하고 있습니다.
									</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</section>
			<footer>
				<div className="ft_inr">
					<div className="ft_top">
						<div className="ft_left">
							<div className="ft_logo">
								<div className="f_logo1"><a href=""><img src="/images/footer-logo01.png" alt="footer-logo01"/></a></div>
								<div className="f_logo2"><a href=""><img src="/images/footer-logo02.png" alt="footer-logo02"/></a></div>
							</div>
							<div className="ft_info">
								<p>(주) 고운세상 코스메틱</p>
								<div className="ft_mid">
									<ul>
										<li>대표이사 : 이주호</li>
										<li>주소 : 경기도 성남시 분당구 분당로 55 퍼스트타워 11F</li>
										<li>대표전화 : 031-724-9000</li>
									</ul>
									<a href="">
										개인정보처리방침
									</a>
								</div>
							</div>
						</div>
						<div className="ft_right">
							<div className="gosite">
								<a href="">GO TO DR.G SITE</a>
							</div>
							<div className="sns">
								<ul>
									<li>
										<a href="" id="blog"><img src="/images/gnb-sns04.png" alt="gnb-sns04"/></a>
									</li>
									<li>
										<a href="" id="insta"><img src="/images/gnb-sns01.png" alt="gnb-sns01"/></a>
									</li>
									<li>
										<a href="" id="you"><img src="/images/gnb-sns02.png" alt="gnb-sns02"/></a>
									</li>
									<li>
										<a href="" id="face"><img src="/images/gnb-sns03.png" alt="gnb-sns03"/></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="ft_bot">
						<div className="copyright">
							<span>COPYRIGHT 2022. GOWOONSESANG COSMETICS CO.,LTD.</span>
							<div className="go_top">
								<a href=""><img src="/images/top-icon.png" alt="top-icon"/></a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</>
  );
}

export default App;
