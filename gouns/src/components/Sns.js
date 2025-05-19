import data from "../lng/KOdata";

function Sns(){
	return(
		<>
			<ul>
				{
					data.sns.map((d,i)=><li key={i+1}><a href="" id={d.id}><img src={`/images/${d.img}`} alt={d.img}/></a></li>)
				}
			</ul>
		</>
	)
}

export default Sns;