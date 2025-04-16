window.addEventListener("load",function(){

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
	let header = document.querySelector("header");
	let nav = document.querySelector("header nav");

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


	//slider
	const brandSlider = new Swiper(".brand_slider",{
		slidesPerView:3,
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
		slidesPerView:3,
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
		slidesPerView:3,
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
	});
});