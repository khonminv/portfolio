function Header(){
	return(
		<header>
			<div className="hd_inr">
				<div className="logo">
					<a href=""><img src="/images/logo.png" alt="logo"/></a>
				</div>
				<nav id="nav">
					<div className="mo_inr">
						<ul>
							<li className="gnb active">
								<a href="">About Us</a>
								<ul className="sub on">
									<li><a href="">기업소개</a></li>
									<li><a href="">연혁</a></li>
									<li><a href="">고운세상</a></li>
									<li><a href="">글로벌 네트워크</a></li>
								</ul>
							</li>
							<li className="gnb">
								<a href="">Brands</a>
								<ul className="sub">
									<li><a href="">Dr.G</a></li>
									<li><a href="">스킨 솔루션</a></li>
								</ul>
							</li>
							<li className="gnb">
								<a href="">Sustainability</a>
								<ul className="sub">
									<li><a href="">sustainability reports</a></li>
									<li><a href="">윤리경영</a></li>
									<li><a href="">인권정책</a></li>
								</ul>
							</li>
							<li className="gnb">
								<a href="">News</a>
								<ul className="sub">
									<li><a href="">고운이야기</a></li>
									<li><a href="">공지사항</a></li>
								</ul>
							</li>
							<li className="gnb">
								<a href="">Careers</a>
							</li>
							<li className="gnb">
								<a href="">Contact</a>
							</li>
							<li className="utils sh">
								<a href=""><img src="/images/gnb-search.png" alt="gnb-search"/></a>
								<input type="text" placeholder="Enter your search term"/>
							</li>
							<li className="utils lang">
								<a href="">KO</a>
								<ul>
									<li><a href="" className="active">KO</a></li>
									<li><a href="">EN</a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="mo_fix">
						<div className="mo_mid">
							<h4>(주) 고운세상 코스메틱</h4>
							<ul>
								<li>주소 : 경기도 성남시 분당구 분당로 55 퍼스트타워 11F</li>
								<li>대표이사 : 이주호</li>
								<li>개인정보관리책임자 : 박상준</li> <br/>
								<li>대표전화 : 031-724-9000</li>
								<li>팩스 : 031-701-9215</li>
								<li>사업자등록번호 : 209-81-23948</li>
							</ul>
						</div>
						<div className="mo_bot">
							<div className="mo_sns">
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
							<div className="mo_lang">
								<ul>
									<li><a href="" className="active">KO</a></li>
									<li><a href="">EN</a></li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				<div className="sub_bg"></div>
				<div className="mobile">
					<a href="">
						<span>1</span>
						<span>2</span>
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header;