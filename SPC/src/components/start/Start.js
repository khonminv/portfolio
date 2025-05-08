import Header from "./Header";
import Mobiletab from "./Mobiletab";
import Search from "./Search";
import MainSlider from "./MainSlider";

function Start(){
	return(
		<div className="start">
			<Header />
			<Mobiletab />
			<Search />
			<MainSlider />
		</div>
	);
}

export default Start;