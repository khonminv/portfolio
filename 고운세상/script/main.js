
$(function () {





	
	let isMobile;
	$(window).resize(function(){ //데스크탑
		if(window.innerWidth > 1000){
			if(isMobile != false){
				isMobile = false;
				console.log(isMobile);
				$("nav").removeClass("mo");
			}
		}
		else{
			if(isMobile != true){ //모바일
				isMobile = true;
				console.log(isMobile);
				$("nav").addClass("mo");
				$("nav").removeClass("mo");
				$(".mobile").removeClass("active");
			}
		}
	});
	$(window).trigger("resize");

	//cursor
	let cursorFlag;
	let cursor=document.querySelector(".cursor");
	let storyBlock=document.querySelector("#sec2")
	let mouseTarget=document.querySelector(".sec3_bot");
	let mouseTargetList=Array.from(mouseTarget.firstElementChild.children);
	let footerBlock=document.querySelector("footer");

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
	$("header nav .mo_inr > ul > li").hover(
		function(){
			if ($(this).find("ul").hasClass("sub") == true) {
				

				if(isMobile == false){
					$("header").css({ overflow: "visible" });
					$(this).find("ul").addClass("active");
					$("header .sub_bg").show();
				}
			}
		},
		function(){
			if ($(this).find("ul").hasClass("sub") == true) {
				if(isMobile == false){
					$(this).find("ul").removeClass("active");
					$("header").css({ overflow: "hidden" });
					$("header .sub_bg").hide();
				}
			}
		}
	)

	$("header").mouseleave(function () {
		if ($("header nav .mo_inr > ul > li").find("ul").hasClass("sub") == true) {
			$(this).find("ul").removeClass("active");
			$("header").css({ overflow: "hidden" });
			$("header .sub_bg").hide();
		}
	});
	//mobile nav


	$(".mobile").click(function (e) {
		e.preventDefault();

		if(isMobile == true){
			if($(".mobile").hasClass("active") == true){
				$("nav").removeClass("mo");
				$("nav").removeClass("active");
				$(".mobile").removeClass("active");
			}
			else{
				$("nav").addClass("mo");
				$("nav").addClass("active");
				$(".mobile").addClass("active");
			}
		}
	});
	$("header nav .mo_inr > ul > li > a").click(function(e){
		e.preventDefault();
		if(isMobile == true){
			if($("header nav .mo_inr > ul > li").hasClass("active") == false){
				$(this).parent("li").addClass("active");
				$(this).next().addClass("on");
			}
			else{
				$("header nav .mo_inr > ul > li").removeClass("active");
				$("header nav .mo_inr > ul > li .sub").removeClass("on");
				$(this).parent("li").addClass("active");
				$(this).next().addClass("on");
			}

		}
	});


	//lang
	$(".lang").click(function(e){
		e.preventDefault();
		if(isMobile == false){
			if($(".lang ul").hasClass("active") == false){
				$(this).find("ul").addClass("active")
				$("header").css({ overflow: "visible" });
				$("header .sub_bg").hide();
			}
			else{
				$(this).find("ul").removeClass("active")
				$("header").css({ overflow: "hidden" });
			}
		}
	});


	//main
	$(function () {
		$(".main .text_box").addClass("eff_on");
	});

	//gsap
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
	$(".swiper-slide").hover(
		function () {
			$(".swiper-slide").css({ opacity: 0.5 });
			$(this).css({ opacity: 1 });
		},
		function () {
			$(".swiper-slide").css({ opacity: 1 });
		}
	);



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
	
});