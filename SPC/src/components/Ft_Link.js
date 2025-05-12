import data from "../data";
function Ft_Link(){
	return(
		<div className="link">
			<ul>
				{
					data.footer.link.map((d,i)=><li key={i+1}><a href="">{d}</a></li>)
				}
			</ul>
		</div>
	);
}

export default Ft_Link;