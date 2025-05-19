import Sns from "./Sns";
import { useTranslation } from 'react-i18next';

function Main(){
	const { t } = useTranslation();

	return(
		<div className="main">
			<div className="text_box">
				<strong>01</strong>
				<span>Gowoonsesang Cosmetics</span>
				<h3>{t("main.h31")}</h3>
				<h3>{t("main.h32")}</h3>
				<p>{t("main.p")}</p>
			</div>
			<div className="pc"><img src={`/images/${t("main.pc")}`} alt={t("main.pc").split(".")[0]}/></div>
			<div className="mo"><img src={`/images/${t("main.mo")}`} alt={t("main.mo").split(".")[0]}/></div>
			<div className="inb">
				<Sns/>
				<a href=""><img src={`/images/${t("main.go")}`} alt={t("main.go").split(".")[0]}/></a>
			</div>
		</div>
	)
}

export default Main;