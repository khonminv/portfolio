import gsap from "gsap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function UiScript() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile);

  useEffect(() => {
    const body = document.body;
    const dim = document.querySelector(".dim");
    const searchBox = document.querySelector(".search_box");
    const searchBtn = document.querySelectorAll(".search a");
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



	//isMobile
    const handleResize = () => {
      const mobile = window.innerWidth <= 1280;
      if (mobile !== isMobile) {
        dispatch({ type: 'SET_MOBILE', payload: mobile });
        if (mobile) {
          	header.classList.add("mo");
			moWayList.forEach((item,i)=>{
				item.classList.remove("active")
			});
			wayTopList.forEach((item,i)=>{
				item.classList.remove("active")
				wayBotList[i].classList.remove("active")
			});
          console.log("모바일");
        } else {
			header.classList.remove("mo");
			tabBox.classList.remove("active");
			body.classList.remove("fixed");
			monavList.forEach((item, i) => {
				item.classList.remove("active");
				monavSubList[i].style.height = 0;
			});
			wayTopList.forEach((item,i)=>{
				item.classList.remove("active")
				wayBotList[i].classList.remove("active")
			});
			lang.classList.remove("active");
			console.log("pc");
        }
      }
    };


	//header fix
    window.addEventListener("resize", handleResize);
    handleResize();

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


	//dim
    const handleDimClick = () => {
		dim.classList.remove("active");
		searchBox.classList.remove("active");
		tabBox.classList.remove("active");
		body.classList.remove("fixed");
    };


	//search
    const handleSearchClick = (e) => {
		e.preventDefault();
		searchBox.classList.add("active");
		dim.classList.add("active");
    };

    searchBtn.forEach((item) => {
      	item.addEventListener("click", handleSearchClick);
    });


	//header
    const handleNavMouseEnter = () => {
      if (!isMobile) {
        header.classList.add("active");
      }
    };


    const handleNavMouseLeave = () => {
      if (!isMobile) {
        header.classList.remove("active");
      }
    };

	//langClick
    const handleLangClick = (e) => {
		e.preventDefault();
		if (!isMobile) {
			lang.classList.toggle("active");
			header.style.overflow = lang.classList.contains("active") ? "visible" : "hidden";
		}
    };

	//tabClick
    const handleTabClick = (e) => {
     	e.preventDefault();
		tabBox.classList.add("active");
		body.classList.add("fixed");
		dim.classList.add("active");
    };

	//tabClose
    const handleMoTabCloseClick = (e) => {
      	e.preventDefault();
		tabBox.classList.remove("active");
		dim.classList.remove("active");
		body.classList.remove("fixed");
		monavList.forEach((item, i) => {
			item.classList.remove("active");
			monavSubList[i].style.height = 0;
		});
    };

    // monavList 이벤트 핸들러
    const monavClickHandlers = [];
    monavList.forEach((item, i) => {
		const clickHandler = (e) => {
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
		};
		item.addEventListener("click", clickHandler);
		monavClickHandlers.push({ item, clickHandler }); // 핸들러를 저장
    });

    // wayTopList 이벤트 핸들러
    const wayTopClickHandlers = [];
    wayTopList.forEach((item, i) => {
		const clickHandler = (e) => {
			e.preventDefault();

			console.log(isMobile)
			if (!item.classList.contains("active")) {
			wayTopList.forEach((item2, j) => {
				item2.classList.remove("active");
				wayBotList[j].classList.remove("active");
			});
			item.classList.add("active");
			wayBotList[Array.from(wayTopList).indexOf(item)].classList.add("active");
			}
		};
		item.addEventListener("click", clickHandler);
		wayTopClickHandlers.push({ item, clickHandler }); // 핸들러를 저장
    });

    // moWayList 이벤트 핸들러
    const moWayClickHandlers = [];
    moWayList.forEach((item, i) => {
		const clickHandler = (e) => {
			e.preventDefault();

			console.log(isMobile)
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
		};
		item.addEventListener("click", clickHandler);
		moWayClickHandlers.push({ item, clickHandler }); // 핸들러를 저장
    });

    // GSAP 애니메이션
    const mainTl = gsap.timeline({ duration: 0.4 });
    mainTl.fromTo(".keytext span", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
    mainTl.fromTo(".keytext p", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
    mainTl.fromTo(".keytext strong", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });

    // 이벤트 추가
    dim.addEventListener("click", handleDimClick);
    nav.addEventListener("mouseenter", handleNavMouseEnter);
    header.addEventListener("mouseleave", handleNavMouseLeave);
    lang.addEventListener("click", handleLangClick);
    tabBtn.addEventListener("click", handleTabClick);
    moTabClose.addEventListener("click", handleMoTabCloseClick);
	moWayList[0].classList.add("active");
	moWayTab[0].classList.add("active");
	wayTopList[0].classList.add("active");
	wayBotList[0].classList.add("active");
	

    // 정리 함수
    return () => {
      window.removeEventListener("resize", handleResize);
      dim.removeEventListener("click", handleDimClick);
      nav.removeEventListener("mouseenter", handleNavMouseEnter);
      header.removeEventListener("mouseleave", handleNavMouseLeave);
      lang.removeEventListener("click", handleLangClick);
      tabBtn.removeEventListener("click", handleTabClick);
      moTabClose.removeEventListener("click", handleMoTabCloseClick);

      // NodeList의 이벤트 제거
      monavClickHandlers.forEach(({ item, clickHandler }) => {
        item.removeEventListener("click", clickHandler);
      });

      wayTopClickHandlers.forEach(({ item, clickHandler }) => {
        item.removeEventListener("click", clickHandler);
      });

      moWayClickHandlers.forEach(({ item, clickHandler }) => {
        item.removeEventListener("click", clickHandler);
      });
    };
  }, [isMobile, dispatch]);

  return null; // No UI to return
}

export default UiScript;