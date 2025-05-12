import SPCway from "./SPCway";
import SecContnent from "./SecContnent";
function Section(){
	return(
		<div className="cont section">
				<SPCway />
				<div className="inr">
					<SecContnent/>			
				</div>
			</div>
	);
}

export default Section;