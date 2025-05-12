import gsap from "gsap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function UiScript() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile);

  useEffect(() => {
    const body = document.body;
    const dim = document.querySelector(".dim");
    const searchBtn = document.querySelectorAll(".search a");
    const searchBox = document.querySelector(".search_box");
    const tabBox = document.querySelector(".mo_tab");
    const header = document.querySelector("header");
    const nav = document.querySelector("header nav");
    const lang = document.querySelector(".lang a");
    const tabBtn = document.querySelector(".tabBtn");
    const moTabClose = document.querySelector(".mo_tab_close");
    const monavList = document.querySelectorAll(".mo_nav > ul > li");
    const monavSubList = document.querySelectorAll(".mo_nav ul > li .sub");
    const wayTopList = document.querySelectorAll(".way_top > ul > li a");
    const wayBotList = document.querySelectorAll(".way_bot > ul li");
    const moWayList = document.querySelectorAll(".way_mobile li > a");
    const moWayTab = document.querySelectorAll(".way_mobile_tab");

    const handleResize = () => {
      const mobile = window.innerWidth <= 1280;
      if (mobile !== isMobile) {
        dispatch({ type: 'SET_MOBILE', payload: mobile });
		
        if (mobile) {
        	header.classList.add("mo");
			console.log("모바일")
        } 
		else {
			header.classList.remove("mo");
			tabBox.classList.remove("active");
			body.classList.remove("fixed");
			monavList.forEach((item, i) => {
				item.classList.remove("active");
				monavSubList[i].style.height = 0;
       		});
			console.log("pc")
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

	//dim
    dim.addEventListener("click", () => {
      dim.classList.remove("active");
      searchBox.classList.remove("active");
      tabBox.classList.remove("active");
      body.classList.remove("fixed");
    });


	//search
    searchBtn.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        searchBox.classList.add("active");
        dim.classList.add("active");
      });
    });


	//nav
    nav.addEventListener("mouseenter", () => {
      if (!isMobile) {
        header.classList.add("active");
      }
    });

	//header
    header.addEventListener("mouseleave", () => {
      if (!isMobile) {
        header.classList.remove("active");
      }
    });

    const handleScroll = () => {
      const pos = window.scrollY;

      if (window.innerHeight < pos) {
        if (!header.classList.contains("fixed")) {
          header.classList.add("fixed");
          gsap.fromTo(header, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
      } else {
        header.classList.remove("fixed");
        gsap.fromTo(header, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      }
    };

    window.addEventListener("scroll", handleScroll);

	//lang
    lang.addEventListener("click", (e) => {
      e.preventDefault();

      if (!isMobile) {
        lang.classList.toggle("active");
        header.style.overflow = lang.classList.contains("active") ? "visible" : "hidden";
      }
    });

	//mo tab
    tabBtn.addEventListener("click", (e) => {
      e.preventDefault();

      tabBox.classList.add("active");
      body.classList.add("fixed");
    });

    moTabClose.addEventListener("click", (e) => {
      e.preventDefault();

      tabBox.classList.remove("active");
      dim.classList.remove("active");
      body.classList.remove("fixed");
    });

    monavList.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

		console.log(isMobile)

        if (isMobile) {
          if (!item.classList.contains("active")) {
            monavList.forEach((item2, j) => {
              gsap.to(monavSubList[j], { height: 0, duration: 0.5 });
              item2.classList.remove("active");
            });
            gsap.fromTo(monavSubList[i], { height: 0 }, { height: "auto", duration: 0.5 });
            item.classList.add("active");
          } else {
            gsap.to(monavSubList[i], { height: 0, duration: 0.5 });
            item.classList.remove("active");
          }
        }
      });
    });

	//way
    wayTopList.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        if (!item.classList.contains("active")) {
          wayTopList.forEach((item2, j) => {
            item2.classList.remove("active");
            wayBotList[j].classList.remove("active");
          });
          item.classList.add("active");
          wayBotList[i].classList.add("active");
        }
      });
      wayTopList[0].classList.add("active");
      wayBotList[0].classList.add("active");
    });

    moWayList.forEach((item, i) => {
      item.addEventListener("click", (e) => {
		 e.preventDefault();
		
      
          if (!item.classList.contains("active")) {
            moWayList.forEach((item2, j) => {
              gsap.to(moWayTab[j], { height: 0, duration: 0.5 });
              item2.classList.remove("active");
              moWayTab[j].classList.remove("active");
            });
            gsap.fromTo(moWayTab[i], { height: 0 }, { height: "auto", duration: 0.5 });
            item.classList.add("active");
            moWayTab[i].classList.add("active");
          } else {
            gsap.to(moWayTab[i], { height: 0, duration: 0.5 });
            item.classList.remove("active");
            moWayTab[i].classList.remove("active");
          }
      });
      moWayList[0].classList.add("active");
      moWayTab[0].classList.add("active");
    });

	//gsap
    const mainTl = gsap.timeline({ duration: 0.4 });
    mainTl.fromTo(".keytext span", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
    mainTl.fromTo(".keytext p", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
    mainTl.fromTo(".keytext strong", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
	
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

    };
  }, [dispatch, isMobile]);

  return <></>;
}

export default UiScript;