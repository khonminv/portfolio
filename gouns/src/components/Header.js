import Navigation from "./Navigation";
import { useTranslation } from 'react-i18next';

function Header(){
	const { t } = useTranslation();
	
	return(
		<header>
			<div className="hd_inr">
				<Logo props={t} />
				<Navigation />
				<div className="sub_bg"></div>
				<div className="mobile">
					<a href="">
						<span>1</span>
						<span>2</span>
					</a>
				</div>
			</div>
		</header>
	)
}

function Logo(t){

	return(
		<div className="logo">
			<a href=""><img src={`/images/${t.props("header.logo")}`} alt={t.props("header.logo").split(".")[0]}/></a>
		</div>
	)
}

export default Header;