import Lang from "./Lang";

function Hd_right(){
	return(
		<div className="hd_right">
			<div className="search">
				<a href="" className="sh_white"><img src="/images/hd_search_icon.png" alt="hd_search_icon.png"/></a>
				<a href="" className="sh_black"><img src="/images/hd_search_active.png" alt="hd_search_active.png"/></a>
			</div>
			<Lang />
			<div className="careers">
				<a href="">CAREERS</a>
			</div>
			<div className="tab">
				<a href="" className="tabBtn"><img src="/images/tab.png" alt="tab"/></a>
			</div>
		</div>
	);
}

export default Hd_right;