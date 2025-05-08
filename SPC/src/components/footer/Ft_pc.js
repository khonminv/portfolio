import Ft_logo from "./Ft_logo";
import Fm_site from "./Fm_site";
import Locate from "./Locate";
import Link from "./Link";
import Sns from "./Sns";
import Copyright from "./Copyright";

function Ft_pc(){
	return(
		<div className="ft_pc">
			<div className="ft_top">
				<Ft_logo />
			</div>
			<div className="ft_bot">
				<div className="ft_bot_left">
					<Locate />
					<Link />
					<Copyright />
				</div>
				<div className="ft_bot_right">
					<Sns />
					<Fm_site />
				</div>
			</div>
		</div>
	);
}

export default Ft_pc;