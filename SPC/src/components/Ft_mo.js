import Ft_logo from "./Ft_logo";
import Fm_site from "./Fm_site";
import Link from "./Ft_Link";
import Sns from "./Ft_sns";


function Ft_mo(){
	return(
		<div className="ft_mobile">
			<div className="top">
				<Ft_logo />
				<Fm_site />
			</div>
			<div className="locate">
				<span>
					서울시 서초구 양재동 남부순환로 2620 (양재동 11-149)
				</span>
			</div>
			<Link />
			<Sns />
			<div className="copyright">
				<span>Copyright SPC All rights reserverd.</span>
			</div>
		</div>
	);
}

export default Ft_mo;