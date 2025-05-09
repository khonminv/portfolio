import SPCway from "./SPCway";
import Brand from "./Sec_Brand";
import Coffee from "./Sec_Coffee";
import Circulation from "./Sec_Circulation";
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