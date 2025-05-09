import Now from "./Now";
import NowMo from "./NowMo";

function SPCnow(){
	return(
		<div className="spc_now section">
			<div className="inr">
				<Now />
				<NowMo />				
				<div className="news_img">
					<img src="/images/news_txt.png" alt="news_txt"/>
				</div>
			</div>
		</div>
	);
}

export default SPCnow;