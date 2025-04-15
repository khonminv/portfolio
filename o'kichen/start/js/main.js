window.addEventListener("DOMContentLoaded", function(){
	let tab=document.querySelector("header .tab");
	let mobile=document.querySelector(".mobile");
	let dim=document.querySelector(".dim");
	let close=document.querySelector(".close");
	let body=document.querySelector("body");

	tab.addEventListener("click", function(e){
		e.preventDefault();

		mobile.classList.add("active");
		dim.classList.add("active");
		body.classList.add("fixed")
	});
	close.addEventListener("click", function(e){
		e.preventDefault();

		mobile.classList.remove("active");
		dim.classList.remove("active");
		body.classList.remove("fixed")
	});







	//main slide
	let swiper = new Swiper(".main_slider", {
		slidesPerView: 1,
		speed:1200,
		autoplay:{
			delay: 5000
		},
		navigation: {
			prevEl: ".main_slider .swiper-button-prev",
			nextEl: ".main_slider .swiper-button-next"
		},
		on: {
			init: function () {

				let current = this.realIndex + 1;
				let total = this.slides.length;

				console.log(current, total)
				document.querySelector(".main_slider .current").textContent = current;
				document.querySelector(".main_slider .total").textContent = total;

			},
			slideChangeTransitionStart: function () {
				let current = this.realIndex + 1;
				console.log(current)
				document.querySelector(".main_slider .current").textContent = current;
			}
		}
	});




	//sub slide
	let sub_swiper = new Swiper(".cardSwiper", {
		slidesPerView: 1.5,
		spaceBetween: 30,
		breakpoints: {
			640: {
				slidesPerView: 3.5
			},
			1024:{
				slidesPerView: 4.5
			}
		},
	});
});


//map
const point={ lat: 37.390462, lng: 126.972062 };

function initMap(){
	const map=new google.maps.Map(document.querySelector(".map"), {
		center: point,
		zoom: 16,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false
	});

	const marker=new google.maps.Marker({
		map: map,
		position: point,
		title: "오뚜기"
	});
}

window.initMap=initMap;
