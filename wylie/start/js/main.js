$(function(){
	$("nav img").click(function(e){
		e.preventDefault();

		$("header nav ul").toggleClass("active");
		$("nav img").toggleClass("active")
		$("body").toggleClass("fixed")
		
		if($("nav img").hasClass("active")){
			$("nav img").attr('src', 'images/ico_tab_close.png')
			$("header").css({overflow : "visible"})
		}
		else{
			$("nav img").attr('src', 'images/ico_tab_open.png')
			$("header").css({overflow : "hidden"})
		}
	})
	

});