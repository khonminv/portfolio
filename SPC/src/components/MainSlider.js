import data from "../data";

function MainSlider(){
	return(
		<div className="slider">
			<div className="dark"></div>
				<div className="key_inr">
					<div className="keytext">
						<span>{data.start.keytext.span}</span>
						<p>{data.start.keytext.p}</p>
						<strong>{data.start.keytext.strong}</strong>
					</div>
				</div>
			<img src={`/images/${data.start.mainImage}`} alt={data.start.mainImage.split(".")[0]}/>
		</div>
	);
}

export default MainSlider;