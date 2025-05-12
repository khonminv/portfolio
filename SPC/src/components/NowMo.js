import data from "../data";

function NowMo(){
	return(
		<div className="now_mobile">
			<ul>
				
					{
						data.now.map((d,i)=>
							<li key={i+1}>
								<span>SPC NOW</span>
								<h4>{d.h4}</h4>
								<p>{d.p}</p>
								<span>{d.span}</span> 
								<a href=""><img src={`/images/${d.image}`} alt={d.image.split(".")[0]}/></a>
							</li>
						)
					}
			
			</ul>
			
		</div>
	);
}

export default NowMo;