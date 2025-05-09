import Nav from "./Nav";
import data from "../data";
import Hd_right from "./Hd_right";
import {useEffect} from "react";
import gsap from "gsap";

function Header(p){
	
	useEffect(()=>{
		let isMobile = p.mobile;

		let header = document.querySelector("header");
		let nav = document.querySelector("header nav");
		let lang = document.querySelector(".lang a");

		nav.addEventListener("mouseenter", function(){
			if(isMobile === false){
				header.classList.add("active")
				
			}
		});
		header.addEventListener("mouseleave",function(){
			if(isMobile === false){
				header.classList.remove("active")
				
			}
		});
	
		let pos;
		//헤더 고정
		window.addEventListener("scroll", function(){
			pos = this.scrollY;
			
			if(window.innerHeight < pos){
				if(header.classList.contains("fixed") === false){
					header.classList.add("fixed")
					gsap.fromTo(header, {opacity:0},{opacity:1,duration:0.5})
					
				}
			}
			else{
				header.classList.remove("fixed")
				gsap.fromTo(header, {opacity:0},{opacity:1,duration:0.5})
			}
		});

		


		lang.addEventListener("click", function(e){
			e.preventDefault();
			
			if(lang.classList.contains("active") === false){
				lang.classList.add("active");
				header.style.overflow = "visible";	
				console.log("추가")
			}
			else{
				lang.classList.remove("active");
				header.style.overflow = "hidden";	
				console.log("제거")
			}
		});

	});

	return(
		<header>
			<div className="nav_back"></div>
			<div className="logo">
				<a href="">
					{
						data.start.header.map((d,i)=>
							<Logo key={i+1} propsValue={d}/>
						)
					}
				</a>
			</div>
			<nav>
				<ul>
					{
						data.start.navigation.map((d,i)=> 
							<Nav key={i+1} propsValue={d} />
						)
					}
				</ul>
			</nav>
			<Hd_right />
		</header>
	);
}

function Logo(p){
	let {logo,color} = p.propsValue;


	return(
		<>
			<img src={`/images/${logo}`} alt={`logo_${color}`} className={color}/>
		</>
	);
}

export default Header;