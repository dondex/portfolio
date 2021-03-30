$(document).ready(function(){
	
	$('.navbar .menu li a').click(function(){
		$('html').css("scrollBehavior", "smooth");
	});

	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn img').toggleClass("active");
	});

});	