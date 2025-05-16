import { gsap, Power3 } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



function UiScript(){
	useEffect(()=>{
		
		let cursorFlag;
		let cursor=document.querySelector(".cursor");
		let storyBlock=document.querySelector("#sec2")
		let mouseTarget=document.querySelector(".sec3_bot");
		let mouseTargetList=Array.from(mouseTarget.firstElementChild.children);
		let footerBlock=document.querySelector("footer");
		let nav = document.querySelector("#nav");
		let mobileTab = document.querySelector(".mobile");
		let body = document.body;
		let header = document.querySelector("header")
		let isMobile;

		//sec2 slider
		const swiper = document.querySelector('.swiper-wrapper');
		const swiperSlides = Array.from(swiper.children);

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

		function slideMove() {
			gsap.killTweensOf(swiper);

			gsap.fromTo(swiper,{xPercent:10} ,{
				xPercent: -105,
				repeat: -1,
				duration: 20,
				ease: "linear",
				yoyo: true
			});

			console.log(isMobile);
		}


		window.addEventListener("resize", function(){
			if(window.innerWidth > 1000){
				if(isMobile !== false){
					isMobile = false;
					body.classList.remove("fix");
					nav.classList.remove('mo');
					nav.classList.remove('active');
					body.classList.remove("fix")
					mobileTab.classList.remove('active');
					slideMove();
				}
			}
			else{
				if(isMobile !== true){ //모바일
					isMobile = true;
					nav.classList.remove("mo");
					nav.classList.add("mo");
					slideMove();
				}
			}
		});

		function triggerResizeEvent() {
			const event = new Event('resize');
			window.dispatchEvent(event);
		}
		triggerResizeEvent();

		
		function moveCircle(e){
			// cursor.style.top = e.pageX;
			// cursor.style.left = e.pageY;
			if(!isMobile){
				gsap.to(cursor,{
					x: e.clientX,
					y: e.clientY,
					duration:0,
				});
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
					if(j === i){
						if(!item2.classList.contains("active")){
							item2.classList.add("active");
						}
					}
					else{
						item2.classList.remove("active");
					}
				});
			});

			item1.addEventListener("mouseleave", function(){
				cursorFlag=false;
				listRemoveClass();
			})
		});

		
		// nav
		const menuItems = document.querySelectorAll('header nav .mo_inr > ul > .gnb');

		menuItems.forEach(item => {
			item.addEventListener('mouseenter', function() {
				const subMenu = this.querySelector('.sub');

				if(subMenu.children.length > 0){
					if (subMenu && subMenu.classList.contains('sub') && !isMobile) {
						header.style.overflow = 'visible';
						subMenu.classList.add('active');
						document.querySelector('header .sub_bg').style.display = 'block';
					}
				}

			});

			item.addEventListener('mouseleave', function() {
				const subMenu = this.querySelector('.sub');
				if (subMenu && subMenu.classList.contains('sub') && !isMobile) {
					subMenu.classList.remove('active');
					header.style.overflow = 'hidden';
					document.querySelector('header .sub_bg').style.display = 'none';
				}
			});
		});

		

		header.addEventListener('mouseleave', function() {
			const subMenus = document.querySelectorAll('header nav .mo_inr > ul > li ul.sub');
			if (subMenus.length > 0) {
				subMenus.forEach(subMenu => {
					subMenu.classList.remove('active');
				});
				this.style.overflow = 'hidden';
				document.querySelector('header .sub_bg').style.display = 'none';
			}
		});
		//mobile nav


		

		mobileTab.addEventListener('click', function(e) {
			e.preventDefault();

			if (isMobile) {
				if (mobileTab.classList.contains('active')) {
					nav.classList.remove('mo');
					nav.classList.remove('active');
					body.classList.remove("fix")
					mobileTab.classList.remove('active');
				} else {
					nav.classList.add('mo');
					nav.classList.add('active');
					body.classList.add("fix")
					mobileTab.classList.add('active');
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



		// 언어 선택 버튼 
		const langButton = document.querySelector('.lang');
		const langMenu = document.querySelector('.lang ul');
		const kolang = document.querySelectorAll('.KO');
		const enlang = document.querySelectorAll('.EN');
		

		langButton.addEventListener('click', function(e) {
			e.preventDefault();
			if (!isMobile) {
				
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
		langButton.addEventListener("mouseleave", function(){
			langMenu.classList.remove('active');
		});

		kolang.forEach((item,i)=>{
			item.addEventListener("click", function(e){
				e.preventDefault();

				if (!item.classList.contains("active")) {
					enlang[i].classList.remove("active");
					item.classList.add("active");
				}
			})
		});
		enlang.forEach((item,i)=>{
			item.addEventListener("click", function(e){
				e.preventDefault();

				if (!item.classList.contains("active")) {
					kolang[i].classList.remove("active");
					item.classList.add("active");
				}
			})
		});
		

		// 메인 텍스트 
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
			},
			ease:Power3.easeOut
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




	
		
		
		let goTop = document.querySelector(".go_top");
		//go top
		goTop.addEventListener("click", function(e){
			e.preventDefault();

			gsap.to(window, { scrollTo: 0, duration: 0.4 });
		});

	});
	

	return null;
}

export default UiScript;