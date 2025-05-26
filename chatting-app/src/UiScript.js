import data from "./data/data";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
let {gnb} = data;

function UiScript() {
    useEffect(() => {
        const gnbList = document.querySelectorAll(".gnb");
        const secList = document.querySelectorAll("section");
		const gnbImages = document.querySelectorAll(".gnb img");
		const loginBtn = document.querySelector(".loginbtn")
		const registerBtn = document.querySelector(".registerbtn")
		const loginForm = document.querySelector(".loginform")
		const registerForm = document.querySelector(".registerform")
		const dim = document.querySelector(".dim")
		
		// console.log(loninForm)
		//gnb

		if(window.innerWidth > 1000){
			alert("모바일 전용 페이지입니다.")
		}

        const handleClick = (index) => (e) => {
            e.preventDefault();

            gnbList.forEach((item, j) => {
                item.classList.remove("active");
                secList[j]?.classList.remove("active");
				gnbImages[j].src = `/images/${gnb[j].off}`;
            });
			
            gnbList[index].classList.add("active");
            secList[index]?.classList.add("active");
            gnbImages[index].src = `/images/${gnb[index].on}`;	
        };
	
		gnbList[1].addEventListener("click",(e)=>{
			const chatPage = document.querySelector("#chat ul")
			let chatBottom = chatPage.scrollTop + chatPage.clientHeight
			console.log(chatBottom)
			gsap.to("#chat",{scrollTo:chatBottom, duration:0})
		});

		

		gnbList[0]?.classList.add("active");
        secList[0]?.classList.add("active");
		gnbImages[0].src = `/images/${gnb[0].on}`;	

		
		dim.addEventListener("click",function(){
			dim.classList.remove("active");
			loginForm.classList.remove("active");
			registerForm.classList.remove("active");
		});
		loginBtn.addEventListener("click", function(){
			loginForm.classList.add("active");
			dim.classList.add("active");
		});
		registerBtn.addEventListener("click", function(){
			registerForm.classList.add("active");
			dim.classList.add("active");
		});
		
		registerForm.lastChild.addEventListener("click", function(){
			dim.classList.remove("active");
			registerForm.classList.remove("active");
		});
		loginForm.lastChild.addEventListener("click", function(){
			dim.classList.remove("active");
			loginForm.classList.remove("active");
		});




		//gsap
		const postBtn = document.querySelector(".b_header button")
		postBtn.addEventListener("click",function(){
			gsap.to(".postpage",{top:0,duration:0.5})
		});
		
		const postBack = document.querySelector(".postback")
		postBack.addEventListener("click",function(e){
			e.preventDefault()
			gsap.to(".postpage",{top:"100%",duration:0.5})
		});


        // 이벤트 리스너 등록
        gnbList.forEach((item, i) => {
            item.addEventListener("click", handleClick(i));
        });
        

        // cleanup
        return () => {
            gnbList.forEach((item, i) => {
                item.removeEventListener("click", handleClick(i));
            });
        };
    }, []);

    return null;
}

export default UiScript;
