function Sec1(p){
	
	return(
		<section id="sec1">
			<div className="inr">
				<div className="left">
					<div className="img_box">
						<img src={`/images/${p.props.img}`} alt={p.props.img.split(".")[0]}/>
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
					{
						p.props.text.h4.map((d,i) => <h4 key={i+1}>{d}</h4>)
					}
					{
						p.props.text.p.map((d,i ) => <p key={i+1}>{d}</p>)
					}
				</div>
				<div className="sec1_bg">
					<img src="/images/main-mentor-bg.png" alt="main-mentor-bg"/>
				</div>
			</div>
		</section>
	)
}

export default Sec1;