import data from "../data";


function SPCway(){


	return(
		<div className="spc_way">
			<div className="inr">
				<div className="way_top">
					<h3>SPC WAY</h3>
					<ul>
						{
							data.section.way.map((d,i) => 
							<li key={i+1}>
								<a href="">
									<span>{d.text1}</span>
									<p>{d.text2}</p>
								</a>
							</li>
							)
						}
					</ul>
				</div>
				<div className="way_bot">
					<ul>
						{
							data.section.way.map((d,i) => 
							<li key={i+1}>
								<div className="way_text">
									<p>{d.text3}</p>
								</div>
								<div className="way_img">
									<img src={`/images/${d.image}`} alt={d.text1}/>
								</div>
							</li>
							)
						}
					</ul>
				</div>
			</div>
			<div className="way_mobile">
				<ul>
					{
						data.section.way.map((d,i) => 
							<li key={i+1}>
								<a href="">
									<span>{d.text1}</span>
									<p>{d.text2}</p>
								</a>
								<div className="way_mobile_tab">
									<img src={`/images/${d.image}`} alt={d.text1}/>
									<div className="inr">
										<p>{d.text3}</p>
										<div className="button">
											<a href="">
												바로가기
											</a>
										</div>
									</div>
								</div>
							</li>
						)
					}
				</ul>
			</div>
		</div>
	);
}

export default SPCway;