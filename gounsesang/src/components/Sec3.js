function Sec3(p){
	return(
		<section id="sec3">
			<div className="sec3_top">
				<div className="text_box">
					<strong>04</strong>
					<span>Gowoonsesang Cosmetics</span>
					<h4>{p.props2}</h4>
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
					{
						p.props.map((d,i)=>
							<li key={i+1}>
								<a href="">
									<div className="img_box"><img src={`/images/${d.img}`} alt={d.img.split(".")[0]}/></div>
									<div className="text_box">
										<h4>{d.h4}</h4>
										<span>{d.span}</span>
									</div>
								</a>
							</li>
						)
					}
				</ul>
			</div>
		</section>
	)
}

export default Sec3;