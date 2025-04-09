$(function(){
	setInterval(function(){
		$(".main_slider .s_img ul").animate({ left: '-100vw' }, 500, function(){
			$(".main_slider .s_img ul").append($(".main_slider .s_img ul li:first-child"));
			$(".main_slider .s_img ul").css({ left: 0 });
		});
	}, 3000);
});