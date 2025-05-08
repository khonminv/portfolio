import Ft_logo from "./Ft_logo";
import Fm_site from "./Fm_site";
import Locate from "./Locate";
import Link from "./Link";
import Sns from "./Sns";
import Copyright from "./Copyright";

function Ft_mo(){
	return(
		<div className="ft_mobile">
			<div className="top">
				<Ft_logo />
				<Fm_site />
			</div>
			<Locate />
			<Link />
			<Sns />
			<Copyright />
		</div>
	);
}

export default Ft_mo;