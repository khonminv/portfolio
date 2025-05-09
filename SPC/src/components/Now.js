import NowContent from "./NowContent";

function Now(){
	return(
		<div className="now">
			<div className="now_left">
				<a href=""><img src="/images/news.png" alt="news"/></a>
			</div>
			<div className="now_right">
				<NowContent />
			</div>
		</div>
	);
}

export default Now;