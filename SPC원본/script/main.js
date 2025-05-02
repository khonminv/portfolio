window.addEventListener("load", function(){
	let header = document.querySelector("header");
	let navBg = document.querySelector(".nav_back");
	let nav = document.querySelector("header nav");
	let lang = document.querySelector(".lang a");
	let langSub = document.querySelector(".lang_sub");
	let wayTopList = document.querySelectorAll(".way_top > ul > li a");
	let wayBotList = document.querySelectorAll(".way_bot > ul li");

	let moWayList = document.querySelectorAll(".way_mobile li > a");
	let moWayTab = document.querySelectorAll(".way_mobile_tab");
	let monavList = document.querySelectorAll(".mo_nav > ul > li");
	let monavSubList = document.querySelectorAll(".mo_nav ul > li .sub");
	let moTabClose = document.querySelector(".mo_tab_close");
	let body = document.body;

	
	let isMobile;

	window.addEventListener("resize", function(){
		if(window.innerWidth > 980){
			if(isMobile != false){
				isMobile = false;
				header.classList.remove("mo");
				console.log("false")
			}
		}
		else{
			if(isMobile != true){
				isMobile = true;
				header.classList.add("mo");
				console.log("true")
			}
		}
	});
	function triggerResizeEvent() {
		const event = new Event('resize');
		window.dispatchEvent(event);
	}
	
	triggerResizeEvent();


	//header
	

	nav.addEventListener("mouseenter", function(){
		if(isMobile == false){
			header.classList.add("active")
			
		}
	});
	header.addEventListener("mouseleave",function(){
		if(isMobile == false){
			header.classList.remove("active")
			
		}
	});

	let pos;
	//헤더 고정
	window.addEventListener("scroll", function(){
		pos = this.scrollY;
		
		if(window.innerHeight < pos){
			if(header.classList.contains("fixed") == false){
				header.classList.add("fixed")
				gsap.fromTo(header, {opacity:0},{opacity:1,duration:0.5})
				
			}
		}
		else{
			header.classList.remove("fixed")
			gsap.fromTo(header, {opacity:0},{opacity:1,duration:0.})
		}
	});
	//lang
	lang.addEventListener("click", function(e){
		e.preventDefault();

		if(lang.classList.contains("active") == false){
			lang.classList.add("active");
			header.style.overflow = "visible";	
		}
		else{
			lang.classList.remove("active");
			header.style.overflow = "hidden";	
		}
	});

	//spc way
	wayTopList.forEach(function(item,i){
		item.addEventListener("click", function(e){
			e.preventDefault()
			if(item.classList.contains("active") == false){
				wayTopList.forEach(function(item2,j){
					wayTopList[j].classList.remove("active");
					wayBotList[j].classList.remove("active");
					
				});
				wayTopList[i].classList.add("active");
				wayBotList[i].classList.add("active");
				
			}
		})
	})
	//spc way mobile
	moWayList.forEach(function(item,i){
		item.addEventListener("click", function(e){
			if(isMobile == true){
				e.preventDefault()
				if(item.classList.contains("active") == false){
					moWayList.forEach(function(item2,j){
						gsap.to(moWayTab[j],{height:0,duration:0.5})
						moWayList[j].classList.remove("active");
						moWayTab[j].classList.remove("active");
					});
					gsap.fromTo(moWayTab[i],{height:0},{height:"500px",duration:0.5})
					moWayList[i].classList.add("active");
					moWayTab[i].classList.add("active");
				}
				else{
					gsap.fromTo(moWayTab[i],{height:"500px"},{height:0,duration:0.5})
					moWayList[i].classList.remove("active");
					moWayTab[i].classList.remove("active");
				}
			}
		})
	})



	//slider
	const brandSlider = new Swiper(".brand_slider",{
		slidesPerView:3.5,
		spaceBetween: 20,
		initialSlide: 1,
		centeredSlides: true,
		on: {
			slideChange: function () {
				if (this.activeIndex === 0) {
					this.slideTo(1);
				}
				if (this.isEnd) {
					this.slideTo(this.activeIndex - 1);
				}
			},
		},
	});


	const drinkSlider = new Swiper(".drink_slider",{
		slidesPerView:3.5,
		spaceBetween: 20,
		initialSlide: 1,
		centeredSlides: true,
		on: {
			slideChange: function () {
				if (this.activeIndex === 0) {
					this.slideTo(1);
				}
				if (this.isEnd) {
					this.slideTo(this.activeIndex - 1);
				}
			},
		},
	});

	const serviceSlider = new Swiper(".service_slider",{
		slidesPerView:3.5,
		spaceBetween: 20,
		initialSlide: 1,
		centeredSlides: true,
		on: {
			slideChange: function () {
				if (this.activeIndex === 0) {
					this.slideTo(1);
				}
				if (this.isEnd) {
					this.slideTo(this.activeIndex - 1);
				}
			},
		},
	});

	
	//mobile tab


	//dim, search
	let dim = document.querySelector(".dim");
	let searchBtn = document.querySelectorAll(".search a");
	let searchBox = document.querySelector(".search_box");
	
	dim.addEventListener("click", function(){
		dim.classList.remove("active");
		searchBox.classList.remove("active");
		tabBox.classList.remove("active");
		body.classList.remove("fixed")
	});
	
	if(isMobile == false){
		searchBtn.forEach(function(item){
			item.addEventListener("click", function(e){
				e.preventDefault();
				
				searchBox.classList.add("active");
				dim.classList.add("active");
			});
		});
	};
	

	//mobile tab
	let tabBtn = document.querySelector(".tabBtn");
	let tabBox = document.querySelector(".mo_tab");

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

	//gsap
	let mainTl = gsap.timeline({duration:0.4});
	mainTl.fromTo(".keytext span",{y:30,opacity:0},{y:0,opacity:1});
	mainTl.from(".keytext p",{y:30,opacity:0});
	mainTl.from(".keytext strong",{y:30,opacity:0});
});