import SPCway from "./SPCway";
import Brand from "./Brand";
import Coffee from "./Coffee";
import Circulation from "./Circulation";
function Section(){
	return(
		<div className="cont section">
				<SPCway />
				<div className="inr">
					<Brand />
					<Coffee />
					<Circulation />					
				</div>
			</div>
	);
}

export default Section;