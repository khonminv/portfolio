import data from "../data";

function Now(){
	return(
		<div className="now">
			<ul>
				{
					data.now.map((d,i)=>
						<li key={i+1}>
							<div className="now_left">
								<a href=""><img src={`/images/${d.image}`} alt={d.image.split(".")[0]}/></a>
							</div>
							<div className="now_right">
								<span>SPC NOW</span>
								<h4>{d.h4}</h4>
								<p>{d.p}</p>
								<span>{d.span}</span> 
							</div>
						</li>
					)
				}
			</ul>
		</div>
	);
}

export default Now;