window.addEventListener("load", function () {
	const navImg = document.querySelector("nav img");
	const navList = document.querySelector("header nav ul");
	const body = document.body;

	let header=document.querySelector("#header");
	let menuArea=header.firstElementChild;
	let start = document.querySelector(".main");
	let sectionList = document.querySelectorAll("section > div");
	let gnb = document.querySelector("#gnb");
	let gnbList = gnb.querySelectorAll("li");
	let btnTop=document.querySelector(".btn_top");
	let tab=menuArea.querySelector(".tab");


	//이것은 모바일인가 
	let isMobile;

	
	window.addEventListener("resize", function(){
		if(window.innerWidth > 720){
			if(isMobile != false){
				isMobile = false;
				console.log("pc")
				
				tab.classList.remove("active");
			}
		}
		else{
			if(isMobile != true){
				isMobile = true;
				console.log("mo")
			}
		}
	});
	
	function triggerResizeEvent() {
		const event = new Event('resize');
		window.dispatchEvent(event);
	}
	
	triggerResizeEvent();

	// 빈 배열로 페이지 리스트를 작성합니다.
	let pageList = [start];



	sectionList.forEach(function (item) {
		// id 값이 signature가 아닐 경우,
		if (item.getAttribute("id") != "signature") {
			// 뒤에 영역에 배열자로 추가합니다.
			pageList.push(item);
		}
	});

	console.log(pageList); // #header #business ...


	function controlMenu(n){
		// console.log(n);

		gnbList.forEach(function(item, i){
			if(isMobile == false){
				if(i == n){
					gnbList[i].classList.add("active");
				}
				else{
					gnbList[i].classList.remove("active");
				}
			}
		});

		if(n != 0){
			menuArea.classList.add("fixed");
			btnTop.classList.add("active");
		}
		else{
			menuArea.classList.remove("fixed");
			btnTop.classList.remove("active");
		}
	}
	pageList.forEach(function(item, i){
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top center",
				end: "bottom center",
				// markers: true,
				onEnter: function(){
					// console.log("enter");

					controlMenu(i);
				},
				onEnterBack: function(){
					// console.log("enter back");

					controlMenu(i);
				}
			}
		});
	});


	//tab메뉴
	navImg.addEventListener("click", function (e) {
		e.preventDefault();

		navList.classList.toggle("active");
		navImg.classList.toggle("active");
		body.classList.toggle("fixed");

		if (navImg.classList.contains("active")) {
			navImg.setAttribute('src', 'images/ico_tab_close.png');
			header.style.overflow = "visible";
		} else {
			navImg.setAttribute('src', 'images/ico_tab_open.png');
			header.style.overflow = "hidden";
		}
	});

	//navi
	let topPos=0;

	
	gnbList.forEach(function(item, i){
		gnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			topPos=pageList[i].offsetTop;

			// console.log(topPos);

			gsap.to(window, { scrollTo: topPos, duration: 0.4 });
		});
	});

	//go탑 버튼
	btnTop.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(window, { scrollTo: 0, duration: 0.4 });
	});

	//main
	const mainTl = gsap.timeline();

	mainTl.fromTo(".keytext span", { y: 30, opacity: 0},{y: 0, opacity: 1, duration: 0.6, delay: 0.3});
	mainTl.fromTo(".keytext h3", { y: 30, opacity: 0},{y: 0, opacity: 1, duration: 0.6});
	mainTl.fromTo(".keytext a", { y: 30, opacity: 0},{y: 0, opacity: 1, duration: 0.6});


	//business
	let businessList = document.querySelectorAll(".section1 li");

	const businessTl = gsap.timeline({
		scrollTrigger:{
			trigger: ".section1",
			start: "top center",
			end: "bottom center",
		}
	});

	businessList.forEach(function(item){
		businessTl.from(item,{y:50,opacity:0,duration:0.5});
	});
	

	//portfolio
	let portfolioList = document.querySelectorAll(".section2 li");

	const portfolioTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".section2",
			start: "top center",
			end: "bottom center",
		}
	});
	portfolioList.forEach(function(item){
		portfolioTl.from(item,{y:30,opacity:0, duration:0.2});
	});
	

	//culture
	let cultureList = document.querySelectorAll(".section3 li");

	const cultureTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".section3",
			start: "top 80%",
			end: "bottom 60%",
			scrub: 2,
			markers:true
		}
	})

	cultureList.forEach(function(item){
		cultureTl.from(item,{y:30,opacity:0});
	})

	//awards
	let awardsList = document.querySelectorAll(".section4 li");

	const awardsTl = gsap.timeline({
		scrollTrigger:{
			trigger: ".section4",
			start: "top center",
			end: "bottom center",
			
		}
	});

	awardsList.forEach(function(item){
		awardsTl.from(item,{y:50,opacity:0,duration:0.5});
	});

	//contact us

	const contactTl = gsap.timeline({
		scrollTrigger:{
			trigger: ".contact_us",
			start: "top center",
			end: "bottom center",
		}
	});

	
	contactTl.from("#name",{y:50,opacity:0,duration:0.4});
	contactTl.from("#email",{y:50,opacity:0,duration:0.4});
	contactTl.from("#subject",{y:50,opacity:0,duration:0.4});
	contactTl.from("#message",{y:50,opacity:0,duration:0.4});
	contactTl.from("#send",{opacity:0,duration:0.3,repeat:2});


});