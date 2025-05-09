import Nav from "./Nav";
import Lang from "./Lang"
import data from "../data";
import { useEffect } from "react";
import gsap from "gsap";

function Mobiletab(){
	useEffect(()=> {
		let body = document.body;
		let dim = document.querySelector(".dim");
		let tabBtn = document.querySelector(".tabBtn");
		let tabBox = document.querySelector(".mo_tab");
		let monavList = document.querySelectorAll(".mo_nav > ul > li");
		let monavSubList = document.querySelectorAll(".mo_nav ul > li .sub");
		let moTabClose = document.querySelector(".mo_tab_close");

		tabBtn.addEventListener("click", function(e){
			e.preventDefault();

			tabBox.classList.add("active");
			dim.classList.add("active");
			body.classList.add("fixed");
		});
		moTabClose.addEventListener("click", function(e){
			e.preventDefault();

			tabBox.classList.remove("active");
			dim.classList.remove("active");
			body.classList.remove("fixed");

		});

		monavList.forEach(function(item,i){
			item.addEventListener("click",function(e){
				e.preventDefault();

				if(item.classList.contains("active") == false){
					monavList.forEach(function(item2,j){
						gsap.to(monavSubList[j],{height:0,duration:0.5});
						monavList[j].classList.remove("active")
						
					});
					gsap.fromTo(monavSubList[i],{height:0},{height:"auto",duration:0.5});
					monavList[i].classList.add("active");
					
				}
				else{
					gsap.to(monavSubList[i],{height:0,duration:0.5});
					monavList[i].classList.remove("active");
					
				}

				
			});
		});
	});
	return(
		<div className="mo_tab">
				<div className="mo_tab_top"> 
					<Lang />
					<div className="mo_tab_close">
						<a href=""><img src={`/images/${data.start.close}`} alt={data.start.close.split(".")[0]}/></a>
					</div>
				</div>
				<div className="mo_nav">
					<ul>
						<Nav />
					</ul>
				</div>
			</div>
	);
}

export default Mobiletab;