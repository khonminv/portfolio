import data from "./data/data";
import { useEffect } from "react";

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
