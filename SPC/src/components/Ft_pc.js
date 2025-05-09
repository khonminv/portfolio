import Ft_logo from "./Ft_logo";
import Fm_site from "./Fm_site";
import Link from "./Ft_Link";
import Sns from "./Ft_sns";

function Ft_pc(){
	return(
		<div className="ft_pc">
			<div className="ft_top">
				<Ft_logo />
			</div>
			<div className="ft_bot">
				<div className="ft_bot_left">
					<div className="locate">
						<span>
							서울시 서초구 양재동 남부순환로 2620 (양재동 11-149)
						</span>
					</div>
					<Link />
					<div className="copyright">
						<span>Copyright SPC All rights reserverd.</span>
					</div>
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