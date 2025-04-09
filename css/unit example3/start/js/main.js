$(function(){
	setInterval(function(){
		$(".slider ul").animate({ left: '-100vw' }, 500, function(){
			$(".slider ul").append($(".slider ul li:first-child"));
			$(".slider ul").css({ left: 0 });
		});
	}, 3000);
});