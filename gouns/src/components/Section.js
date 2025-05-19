import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import { useTranslation } from 'react-i18next';

function Section(){
	const { t } = useTranslation();
	

	return(
		<>
			<Sec1 props={t("sec1", { returnObjects: true } )}/>
			<Sec2 props={t("sec2", { returnObjects: true })} props2={t("sec2h4")}/>
			<Sec3 props={t("sec3", { returnObjects: true })} props2={t("sec3h4")}/>
		</>
	)
}

export default Section;