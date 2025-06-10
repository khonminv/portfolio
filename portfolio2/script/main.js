window.addEventListener("load", function(){
	const lenis=new Lenis();

	lenis.on("scroll", ScrollTrigger.update);

	gsap.ticker.add(function(time){
		lenis.raf(time*1000)
	});

	// gsap.ticker.lagSmoothing(0);
	let body = document.body
	let video = document.querySelector(".main video");
	let imgBox = document.querySelectorAll(".img_box");
	let header = document.querySelector("#header");
	let menuList = document.querySelectorAll("#nav ul li");
	let secList = document.querySelectorAll("section");
	let startpage = document.querySelector(".start")
	let pageList = [startpage, ...secList];
	let pageOffset=pageList.map(item => item.offsetTop);

	console.log(pageOffset);

	let topBtn = document.querySelector(".go_top");
	let cursor = document.querySelector(".cursor");
	let cursorIn = document.querySelector(".cursor_in")
	let aTag = document.querySelectorAll(".view");
	let proList = document.querySelectorAll("#project ul li");




	// console.log(aTag)


	//loading
	
	setTimeout(function() {
		document.getElementById('loading').style.opacity = 0;
		window.scrollTo(0, 0);
		
		body.style.overflow = "auto";
		body.style.overflowX = "hidden";
	}, 3500);
	setTimeout(function() {
		document.getElementById('loading').style.display = "none";

	}, 3700);


	//ismobile
	let isMobile;
	window.addEventListener("resize", function(){
		if(window.innerWidth < 780){
			if(isMobile != true){
				isMobile = true;
				// console.log("mo");
			}
		}
		else{
			if(isMobile != false){
				isMobile = false;
				// console.log("pc");
			}
		}
	});
	function resizeEvent(){
		const event = new Event("resize")
		window.dispatchEvent(event);
	}
	resizeEvent();


	//cursor
	document.body.addEventListener('mousemove', function(e) {
		gsap.to(cursor,{
			x: e.clientX,
			y: e.clientY,
			duration:0,
		});
	});
	aTag.forEach(function(item){
		item.addEventListener("mouseenter", function(){
			cursor.classList.add("view");
			cursorIn.style.display = "block";
		});
		item.addEventListener("mouseleave", function(){
			cursor.classList.remove("view");
			cursorIn.style.display = "none";
		});
	});
	//go top
	topBtn.addEventListener("click", function(e){
		e.preventDefault();
		gsap.to(window,{scrollTo:startpage.offsetTop,duration:0.6,autoKill:false});
	});
	
	//video
	video.muted = true;
	video.play()
	video.addEventListener("ended",function(){
		video.play()
	});


	//header
	window.addEventListener("scroll", function(){


		if(window.scrollY > 500){
			if(header.classList.contains("fixed") == false){
				header.classList.add("fixed");
				topBtn.classList.add("active");
				gsap.fromTo("#header",{opacity:0},{opacity:1,duration:0.3});
				// console.log("fix")
			}
		}
		else{
			if(header.classList.contains("fixed") == true){
				header.classList.remove("fixed");
				topBtn.classList.remove("active");
			}
			
		}
	});

	// menuList
	menuList.forEach(function(item,i){
		item.addEventListener("click",function(e){
			e.preventDefault();

			if(item.classList.contains("active") == false){
				menuList.forEach(function(item2,j){
					menuList[j].classList.remove("active")
				});

				item.classList.add("active");
			}

			let pageTargety;

			if(i != 1){
				pageTargety=pageList[i+1].offsetTop;
			}
			else{
				pageTargety=pageOffset[2];
			}

			gsap.to(window, { scrollTo: pageTargety, duration: 0.5, onComplete: function(){
				setTimeout(function(){
					gsap.to(window, { scrollTo: pageTargety, duration: 0.2 });
				}, 10);
			}});
		});
	});

	let offsetList=[];
	let pageN=0;
	let pushPage=false;

	function offsetMeasure(){
		offsetList=[];

		pageList.forEach(function(item, i){
			if(!pushPage){
				offsetList.push(item.offsetTop-1);
			}
			else{
				if(i != 2){
					offsetList.push(item.offsetTop-1);
				}
				else{
					offsetList.push(item.offsetTop+1200); // pin
				}
			}
		});

		// console.log(offsetList);
	};

	offsetMeasure();

	window.addEventListener("scroll", function(){
		let t=window.scrollY;
		let h=window.innerHeight;

		if(t < offsetList[1]-h/3){
			pageN=0;
			controlMenu(pageN);
		}
		else if(t < offsetList[2]-h/5){
			pageN=1;
			controlMenu(pageN);
		}
		else if(t < offsetList[3]-h/2){
			pageN=2;
			controlMenu(pageN);
		}
		else if(t < offsetList[4]-h/2){
			pageN=3;
			controlMenu(pageN);
		}
		else{
			pageN=4;
			controlMenu(pageN);
		}

	});
	
	controlMenu();
	function controlMenu(n){
		
		menuList.forEach(function(item,i){
			if(i==n-1){
				item.classList.add("active");
				
			}
			else if(n == 0){
				item.classList.remove("active");
				
			}
			else{
				item.classList.remove("active");
				
			}
		});
	};
	


	//skill
	const skillTl = gsap.timeline({
		scrollTrigger:{
			trigger: "#skill",
			start: "top 20%",
			end: "+=2000",
			scrub: true,
			pin:true,
			autoKill: false,
			// markers:true
			onEnter: function(){
				pushPage=true;

				offsetMeasure();
			}
		},
	});
	
	skillTl.to(".skill_text",{opacity:1,duration:2});
	if(isMobile == true){
		skillTl.to("#skill .inr",{opacity:1,xPercent:-100,duration:6});
	}
	else{
		skillTl.to("#skill .inr",{opacity:1,xPercent:-150,duration:6});
	}

	//project
	imgBox.forEach(function(item) {
		item.addEventListener("mousemove", function(e) {
	
			const rect = item.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
	
			Array.from(item.children).forEach(function(child) {
				gsap.to(child, {
					x: x/3,
					y: y/3,
					duration: 0.5,
					ease: "power1.out",
					overwrite: "auto"
				});
			});
		});
	
		
	});
	proList.forEach(function(item,i){
		gsap.to(imgBox[i].children, { opacity: 0});
		item.addEventListener("mouseenter", function() {
			gsap.to(imgBox[i].children, { opacity: 1, duration: 0.3 });
		});
	
		item.addEventListener("mouseleave", function() {
			gsap.to(imgBox[i].children, { opacity: 0, duration: 0.3 });
		});
	});


	//open source
	var swiper = new Swiper(".openSlide", {
		speed:1000,
		loop:true,
		centeredSlides: true,
		pagination: {
		  el: ".swiper-pagination",
		},
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		autoplay:{
			delay: 5000,
		},
		on: {
			slideChange: function () {
			  const slides = this.slides;
			  slides.forEach(function(slide){
				slide.classList.remove('swiper-slide-active');
			  });
			  slides[this.activeIndex].classList.add('swiper-slide-active');
			},
		  },
		breakpoints:{
			480:{
				slidesPerView: 2,
			},
			780:{
				spaceBetween:20,
				slidesPerView: 3,
			},
			1080:{
				spaceBetween:30,
			},
			1400:{
				spaceBetween:40,
				slidesPerView: 4,
			}
		}
	  });
	//gsap
	
});