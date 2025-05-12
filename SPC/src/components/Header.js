import Nav from "./Nav";
import data from "../data";
import Hd_right from "./Hd_right";


function Header(p){
	

	return(
		<header>
			<div className="nav_back"></div>
			<div className="logo">
				<a href="">
					{
						data.start.header.map((d,i)=>
							<Logo key={i+1} propsValue={d}/>
						)
					}
				</a>
			</div>
			<nav>
				<ul>
					{
						data.start.navigation.map((d,i)=> 
							<Nav key={i+1} propsValue={d} />
						)
					}
				</ul>
			</nav>
			<Hd_right />
		</header>
	);
}

function Logo(p){
	let {logo,color} = p.propsValue;


	return(
		<>
			<img src={`/images/${logo}`} alt={`logo_${color}`} className={color}/>
		</>
	);
}

export default Header;