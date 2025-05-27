
import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function UiScript() {
    useEffect(() => {
		const loginForm = document.querySelector(".loginform")
		const registerForm = document.querySelector(".registerform")
		const dim = document.querySelector(".dim")
		
		// console.log(loninForm)
		//gnb

		if(window.innerWidth > 1000){
			alert("모바일 전용 페이지입니다.")
		}


		
		dim.addEventListener("click",function(){
			dim.classList.remove("active");
			loginForm.classList.remove("active");
			registerForm.classList.remove("active");
		});
		



		//gsap
		


        

        // cleanup
        return () => {
            
        };
    }, []);

    return null;
}

export default UiScript;
