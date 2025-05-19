import Sns from "./Sns";
import { useTranslation } from 'react-i18next';

function Footer(){
	const { t } = useTranslation();
	return(
		<footer>
			<div className="ft_line"></div>
			<div className="ft_inr">
				<div className="ft_top">
					<div className="ft_left">
						<div className="ft_logo">
							{
								t("footer.logo", { returnObjects: true }).map((d,i)=>
									<div key={i+1} className={`f_logo${i+1}`}><a href=""><img src={`/images/${d}`} alt={d.split(".")[0]}/></a></div>
								)
							}
						</div>
						<div className="ft_info">
							<div className="ft_mid">
								<ul>
									{
										t("footer.info.li", { returnObjects: true }).map((d,i) => <li key={i+1}>{d}</li>)
									}
								</ul>
								<a href="">
									개인정보처리방침
								</a>
							</div>
						</div>
					</div>
					<div className="ft_right">
						<div className="gosite">
							<a href="">GO TO DR.G SITE</a>
						</div>
						<div className="sns">
							<Sns />
						</div>
					</div>
				</div>
				<div className="ft_bot">
					<div className="copyright">
						<span>COPYRIGHT 2022. GOWOONSESANG COSMETICS CO.,LTD.</span>
						<div className="go_top">
							<a href=""><img src="/images/top-icon.png" alt="top-icon"/></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;