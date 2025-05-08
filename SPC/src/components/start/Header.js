import Logo from "./Logo";
import Nav from "./Nav";

function Header(){
	return(
		<header>
			<div className="nav_back"></div>
			<Logo />
			<Nav/>
		</header>
	);
}

export default Header;