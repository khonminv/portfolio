import data from "../data";

function Ft_sns(){
	return(
		<div className="sns">
			<ul>
				{
					data.footer.sns.map((d,i)=><li key={i+1}><a href=""><img src={`/images/${d}`} alt={d.split(".")[0]}/></a></li>)
				}
			</ul>
		</div>
	);
}

export default Ft_sns;