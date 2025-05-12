import Header from "./Header";
import Mobiletab from "./Mobiletab";
import Search from "./Search";
import MainSlider from "./MainSlider";
import Dim from './Dim';
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Start(){

	

    


	
	return(
		<>
			<Dim />
			<div className="start">
				<Header/>
				<Mobiletab />
				
				<MainSlider />
				<Search />
			</div>
		</>
		
	);
}

export default Start;