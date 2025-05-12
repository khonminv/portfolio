import Nav from "./Nav";
import data from "../data";

function Mobiletab(){
	return(
		<div className="mo_tab">
				<MoTabTop/>
				<div className="mo_nav">
					<ul>
						{
							data.start.navigation.map((d,i)=> 
								<Nav key={i+1} propsValue={d} />
							)
						}
					</ul>
				</div>
			</div>
	);
}

function MoTabTop(){
	return(
		<div className="mo_tab_top"> 
			<div className="lang">
					<ul>
						<li><a href=""  className="active">KO</a></li>
						<li><a href="">EN</a></li>
					</ul>
			</div>
			<div className="mo_tab_close">
				<a href=""><img src={`/images/${data.start.close}`} alt={data.start.close.split(".")[0]}/></a>
			</div>
		</div>
	);
}
export default Mobiletab;