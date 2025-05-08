function Nav(){
	return(
		<nav>
			<ul>
				<li>
					<a href="">ABOUT</a>
					<ul className="sub">
						<li><a href="">SPC WAY</a></li>
						<li><a href="">R&D</a></li>
						<li><a href="">관계사</a></li>
						<li><a href="">글로벌</a></li>
						<li><a href="">CI소개</a></li>
					</ul>
				</li>
				<li>
					<a href="">SPC HISTORY</a>
					<ul className="sub">
						<li><a href="">헤리티지</a></li>
						<li><a href="">연혁</a></li>
					</ul>
				</li>
				<li>
					<a href="">BRAND</a>
					<ul className="sub">
						<li><a href="">베이커리</a></li>
						<li><a href="">디저트</a></li>
						<li><a href="">외식/다이닝</a></li>
						<li><a href="">커피/음료</a></li>
						<li><a href="">유통/서비스</a></li>
					</ul>
				</li>
				<li>
					<a href="">SPC NOW</a>
					<ul className="sub">
						<li><a href="">뉴스</a></li>
						<li><a href="">매거진</a></li>
						<li><a href="">SNS</a></li>
					</ul>
				</li>
				<li>
					<a href="">ESG</a>
					<ul className="sub">
						<li><a href="">ESG경영</a></li>
						<li><a href="">정도경영</a></li>
						<li><a href="">안전경영</a></li>
						<li><a href="">행복한 재단</a></li>
						<li><a href="">사회공헌</a></li>
					</ul>
				</li>
				<li>
					<a href="">SUPPORT</a>
					<ul className="sub">
						<li><a href="">가맹문의</a></li>
						<li><a href="">위치안내</a></li>
						<li><a href="">문의하기</a></li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;