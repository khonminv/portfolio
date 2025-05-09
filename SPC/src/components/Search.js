import data from "../data";

function Search(){

	// console.log(data.start.search.image[1].split(".")[0])
	return(
		<div className="search_box">
			<input type="text" placeholder="검색어를 입력하세요"/>
			<a href="" className={data.start.search.class[1]}><img src={`/images/${data.start.search.image[1]}`} alt={data.start.search.image[1].split(".")[0]}/></a>
		</div>
	);
}

export default Search;