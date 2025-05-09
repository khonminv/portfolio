function Nav(p){
	const { depth1, depth2 } = p.propsValue 
    ? { depth1: p.propsValue.depth1, depth2: p.propsValue.depth2 }
    : { depth1: '', depth2: [] };
	
	return(
		<>
			<li>
				<a href="">{depth1}</a>
				<ul className="sub">
					{
						depth2.map((d,i) => <li key={i+1}><a href="">{d}</a></li>)
					}
				</ul>
			</li>
		</>
				

	);
}

export default Nav;