import Nav from "./Nav";
import Lang from "./Lang"

function Mobiletab(){
	return(
		<div className="mo_tab">
				<div className="mo_tab_top"> 
					<Lang />
					<div className="mo_tab_close">
						<a href=""><img src="/images/bp_close_btn.png" alt="bp_close_btn"/></a>
					</div>
				</div>
				<div className="mo_nav">
					<Nav />
				</div>
			</div>
	);
}

export default Mobiletab;