window.addEventListener("load", function(){
	let video = document.querySelector(".main video");
	let proList = document.querySelectorAll(".pro_list > li");
	let body = document.body;
	let header = document.querySelector("#haeder")

	let sectionLi = document.querySelectorAll("section");

	lenisAnimation();
	//video
	video.muted = true;
	video.play()
	video.addEventListener("ended",function(){
		video.play()
	});


	//header
	// let position=0;
	// window.addEventListener("scroll", function(){
	// 	position = scrollY;
	// 	console.log(window.innerHeight)

	// 	if(window.innerHeight < position){
	// 		header.classList.add("fixed");
	// 	}
	// });
	
	


	


	//skill
	const skillTl = gsap.timeline({
		scrollTrigger:{
			trigger: "#skill",
			start: "top 60%",
			end: "bottom -100%",
			scrub: true,
			pin:true,
		},
		
	});
	skillTl.to(".skill_text",{opacity:1,duration:2});
	skillTl.to("#skill .inr",{opacity:1,x:-3000,duration:3});
	

	//project
	proList.forEach(function(item,i){
		item.addEventListener("mouseenter",function(){
			item.classList.add("active");
		});
		item.addEventListener("mouseleave", function(){
			item.classList.remove("active");
		});
	});

	const projectTl = gsap.timeline({
		scrollTrigger: {
		  trigger: "#project",
		  start: "top center",
		  end: "bottom 70%",
		  scrub: true,
		  duration:3,
		  onEnter: function() {
			body.classList.add("active");
		  },
		  onLeave: function() {
			body.classList.remove("active");
		  },
		  onEnterBack: function() {
			body.classList.add("active");
		  },
		  onLeaveBack: function() {
			body.classList.remove("active");
		  },
		}
	  });

	

	//open source
	var swiper = new Swiper(".openSlide", {
		speed:1000,
		slidesPerView: 5,
		spaceBetween:30,
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
	  });
	//gsap
	
});