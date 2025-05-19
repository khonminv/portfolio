import Sns from "./Sns";
import { useTranslation } from 'react-i18next';

function Navigation(p){

	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return(
		<nav id="nav">
			<div className="mo_inr">
				<ul>
					{
						t("header.navi", { returnObjects: true }).map((d1, i) => (
                            <li key={i} className="gnb">
                                <a href="">{d1.depth1}</a>
                                <ul className="sub">
                                    {
                                        Array.isArray(d1.depth2) && d1.depth2.length > 0 ? (
                                            d1.depth2.map((d2, j) => (
                                                <li key={j}><a href="">{d2}</a></li>
                                            ))
                                        ) : null 
                                    }
                                </ul>
                            </li>
                        ))
					}
					<li className="utils sh">
						<a href=""><img src={`/images/${t("header.img")}`} alt={t("header.img").split(".")[0]}/></a>
						<input type="text" placeholder="Enter your search term"/>
					</li>
					<li className="utils lang">
						<a href="">{t("header.lang")}</a>
						<ul>
							<li><a href="" className="KO active" onClick={() => changeLanguage('ko')}>KO</a></li>
							<li><a href="" className="EN" onClick={() => changeLanguage('en')}>EN</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="mo_fix">
				<div className="mo_mid">
					<h4>{t("header.mobile.h4")}</h4>
					<ul>
						{
							t("header.mobile.li", { returnObjects: true }).map((d,i)=> <li key={i+1}>{d}</li>)
						}
					</ul>
				</div>
				<div className="mo_bot">
					<div className="mo_sns">
						<Sns/>
					</div>
					<div className="mo_lang">
						<ul>
							<li><a href="" className="KO active" onClick={() => changeLanguage('ko')}>KO</a></li>
							<li><a href="" className="EN" onClick={() => changeLanguage('en')}>EN</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation;