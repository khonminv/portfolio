import data from '../data/data'


function Gnb(){
	return(
		<div id="gnbbar">
			<ul>
				{
					data.gnb.map((d,i) => <li key={i} className='gnb'><a href=''><img src={`/images/${d.off}`} alt={d.off.split(".")[0]}></img></a></li>)
				}
			</ul>
		</div>
	)
}
export default Gnb;