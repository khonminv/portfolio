window.addEventListener("load",function(){
	//cursor
	let cursorFlag;
	let cursor=document.querySelector(".cursor");
	let storyBlock=document.querySelector("#sec2")
	let mouseTarget=document.querySelector(".sec3_bot");
	let mouseTargetList=Array.from(mouseTarget.firstElementChild.children);
	let footerBlock=document.querySelector("footer");
	let nav = document.querySelector("#nav");
	let mobileTab = document.querySelector(".mobile");
	let isMobile;

	window.addEventListener("resize", function(){
		if(window.innerWidth > 1000){
			if(isMobile != false){
				isMobile = false;
				console.log(isMobile);
				nav.classList.remove("mo")
			}
		}
		else{
			if(isMobile != true){ //모바일
				isMobile = true;
				console.log(isMobile);
				nav.classList.remove("mo")
				nav.classList.add("mo")
				mobileTab.classList.remove("active");
			}
		}
	});

	function triggerResizeEvent() {
		const event = new Event('resize');
		window.dispatchEvent(event);
	}
	triggerResizeEvent();

	
	function moveCircle(e){
		let x=e.pageX;
		let y=e.pageY;

		if(!isMobile){
			cursor.style.left=x+"px";
			cursor.style.top=y+"px";
		}

		if(cursorFlag){
			if(!document.body.classList.contains("mouse_on")){
				// console.log("mouse on add");

				document.body.classList.add("mouse_on");
			}
		}
		else{
			if(document.body.classList.contains("mouse_on")){
				// console.log("mouse on remove");

				document.body.classList.remove("mouse_on");
			}
		}
	}

	function listRemoveClass(){
		mouseTargetList.forEach(function(item){
			item.classList.remove("active");
		});
	}

	document.addEventListener("mousemove", moveCircle);

	mouseTargetList.forEach(function(item1, i){
		item1.addEventListener("mouseenter", function(){
			cursorFlag=true;

			mouseTargetList.forEach(function(item2, j){
				if(j == i){
					if(!item2.classList.contains("active")){
						item2.classList.add("active");
					}
				}
				else{
					item2.classList.remove("active");
				}
			});
		});
	});

	storyBlock.addEventListener("mouseenter", function(){
		cursorFlag=false;
		listRemoveClass();
	});

	footerBlock.addEventListener("mouseenter", function(){
		cursorFlag=false;
		listRemoveClass();
	});
	
	// nav
	const menuItems = document.querySelectorAll('header nav .mo_inr > ul > li');

	menuItems.forEach(item => {
		item.addEventListener('mouseenter', function() {
			const subMenu = this.querySelector('ul');
			if (subMenu && subMenu.classList.contains('sub') && !isMobile) {
				document.querySelector('header').style.overflow = 'visible'; // 헤더의 overflow를 visible로 설정
				subMenu.classList.add('active'); // 서브 메뉴 활성화
				document.querySelector('header .sub_bg').style.display = 'block'; // 서브 배경 표시
			}
		});

		item.addEventListener('mouseleave', function() {
			const subMenu = this.querySelector('ul');
			if (subMenu && subMenu.classList.contains('sub') && !isMobile) {
				subMenu.classList.remove('active'); // 서브 메뉴 비활성화
				document.querySelector('header').style.overflow = 'hidden'; // 헤더의 overflow를 hidden으로 설정
				document.querySelector('header .sub_bg').style.display = 'none'; // 서브 배경 숨기기
			}
		});
	});

	const header = document.querySelector('header');

	header.addEventListener('mouseleave', function() {
		const subMenus = document.querySelectorAll('header nav .mo_inr > ul > li ul.sub');
		if (subMenus.length > 0) {
			subMenus.forEach(subMenu => {
				subMenu.classList.remove('active'); // 서브 메뉴에서 active 클래스 제거
			});
			this.style.overflow = 'hidden'; // 헤더의 overflow 속성 설정
			document.querySelector('header .sub_bg').style.display = 'none'; // 서브 배경 숨기기
		}
	});
	//mobile nav


	const mobileButton = document.querySelector('.mobile');

	mobileButton.addEventListener('click', function(e) {
		e.preventDefault();

		if (isMobile) {
			if (mobileButton.classList.contains('active')) {
				nav.classList.remove('mo');
				nav.classList.remove('active');
				mobileButton.classList.remove('active');
			} else {
				nav.classList.add('mo');
				nav.classList.add('active');
				mobileButton.classList.add('active');
			}
		}
	});
	const menuLinks = document.querySelectorAll('header nav .mo_inr > ul > li > a');

	menuLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			if (isMobile) {
				const parentLi = this.parentElement;
				const activeItems = document.querySelectorAll('header nav .mo_inr > ul > li.active');

				if (activeItems.length === 0) {
					parentLi.classList.add('active');
					const subMenu = this.nextElementSibling;
					if (subMenu) subMenu.classList.add('on');
				} else {
					activeItems.forEach(activeItem => {
						activeItem.classList.remove('active');
						const subMenu = activeItem.querySelector('.sub');
						if (subMenu) subMenu.classList.remove('on');
					});
					parentLi.classList.add('active');
					const subMenu = this.nextElementSibling;
					if (subMenu) subMenu.classList.add('on');
				}
			}
		});
	});



	// 언어 선택 버튼 클릭 이벤트
	const langButton = document.querySelector('.lang');
	langButton.addEventListener('click', function(e) {
		e.preventDefault();
		if (!isMobile) {
			const langMenu = this.querySelector('ul');
			if (!langMenu.classList.contains('active')) {
				langMenu.classList.add('active');
				document.querySelector('header').style.overflow = 'visible';
				document.querySelector('header .sub_bg').style.display = 'none';
			} else {
				langMenu.classList.remove('active');
				document.querySelector('header').style.overflow = 'hidden';
			}
		}
	});

	// 메인 텍스트 박스에 클래스 추가
	document.addEventListener('DOMContentLoaded', function() {
		const textBoxes = document.querySelectorAll('.main .text_box');
		textBoxes.forEach(box => {
			box.classList.add('eff_on');
		});
	});
	
	//gsap
	gsap.to(".main .text_box",{opacity:1,duration:0.3});
	//sec1
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#sec1",
			start: "top 50%"
		}
	});
	tl.to("#sec1", {
		opacity: 1,
		duration: 1,
	});
	tl.to("#sec1 .left .img_box img", {
		scale: 1,
		duration: 1,
	}, 0);
	tl.to("#sec1 .right .right_top", {
		y: -50,
		opacity: 1,
		duration: 1,
	}, 0);
	tl.to("#sec1 .right h4", {
		y: -50,
		opacity: 1,
		duration: 1,
	}, 0.5);
	tl.to("#sec1 .right p", {
		y: -50,
		opacity: 1,
		duration: 1,
	}, 0.5);


	//sec2
	const tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: "#sec2",
			start: "top 50%"
		}
	}, 0);
	tl2.to("#sec2", {
		opacity: 1,
		duration: 1,
	}, 0);
	tl2.to("#sec2 .swiper-slide .img_box img", {
		scale: 1,
		duration: 1,
	}, 0);


	//sec3
	const tl3 = gsap.timeline({
		scrollTrigger: {
			trigger: "#sec3 .sec3_top",
			start: "top 80%"
		}
	});

	tl3.to("#sec3", {
		opacity: 1,
		duration: 1,
	}, 0);

	const tl4 = gsap.timeline({
		scrollTrigger: {
			trigger: "#sec3 .sec3_bot",
			start: "top 80%"
		}
	});
	tl4.to("#sec3 .img_box img", {
		scale: 1,
		duration: 1,
	}, 0);
	tl4.to("#sec3 .sec3_bot ul li a .text_box h4", {
		x: -50,
		duration: 1,
	}, 0);
	tl4.to("#sec3 .sec3_bot ul li a .text_box span", {
		y: -50,
		duration: 1,
	}, 0);




	//sec2 slider
	const swiperSlides = document.querySelectorAll('.swiper-slide');

	swiperSlides.forEach(slide => {
		slide.addEventListener('mouseenter', function() {
			swiperSlides.forEach(s => {
				s.style.opacity = 0.5;
			});
			this.style.opacity = 1;
		});

		// 마우스 아웃 이벤트
		slide.addEventListener('mouseleave', function() {
			swiperSlides.forEach(s => {
				s.style.opacity = 1;
			});
		});
	});


	//swiper
	const swiper = new Swiper(".mySwiper", {
		slidesPerView: 5,
		spaceBetween: 60,
		loop: true,
		autoplay:{
			delay: 1,
			disableOnInteraction: false
		},
		speed: 10000,
		observer: true,
		breakpoints: {
						    989: {
						    	spaceBetween: 80
						    }
					  },
	});
	
	let goTop = document.querySelector(".go_top");
	//go top
	goTop.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(window, { scrollTo: 0, duration: 0.4 });
	});
});