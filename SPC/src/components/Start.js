import Header from "./Header";
import Mobiletab from "./Mobiletab";
import Search from "./Search";
import MainSlider from "./MainSlider";
import Dim from './Dim';
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Start(){

	const dispatch = useDispatch();
    const isMobile = useSelector((state) => state.isMobile);

    useEffect(() => {
        const body = document.body;
        const dim = document.querySelector(".dim");
        const searchBtn = document.querySelectorAll(".search a");
        const searchBox = document.querySelector(".search_box");
        const tabBox = document.querySelector(".mo_tab");
        const header = document.querySelector("header");


        const handleResize = () => {
            const mobile = window.innerWidth <= 980;
            if (mobile !== isMobile) {
                dispatch({ type: 'SET_MOBILE', payload: mobile });
                if (mobile) {
                    header.classList.add("mo");
                    console.log("Mobile view:", mobile);
                } else {
                    header.classList.remove("mo");
                    console.log("Desktop view:", mobile);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // 초기 체크

		
	dim.addEventListener("click", function(){
		dim.classList.remove("active");
		searchBox.classList.remove("active");
		tabBox.classList.remove("active");
		body.classList.remove("fixed")
	});
	
	if(isMobile === false){
		searchBtn.forEach(function(item){
			item.addEventListener("click", function(e){
				e.preventDefault();
				
				searchBox.classList.add("active");
				dim.classList.add("active");
			});
		});
	};
       
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });



	
	return(
		<>
			<Dim />
			<div className="start">
				<Header mobile={isMobile}/>
				<Mobiletab />
				
				<MainSlider />
				<Search />
			</div>
		</>
		
	);
}

export default Start;