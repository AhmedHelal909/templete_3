
$(function(){
'use strict';

var winH =$(window).height(),
    upperH = $('.upper-nav').innerHeight(),
    navH =$('.navbar').innerHeight();
    $('.carousel-item,.slider').height(winH -(upperH + navH));
    // scroll
    $('.navbar .navbar-nav .nav-item a').click(function(){
$('html , body').animate({
	scrollTop : $('#' + $(this).data('value')).offset().top
},1500);
});
    // scroll button
    $(window).scroll(function(){
var scroll =$(this).scrollTop();
if(scroll>200){
	$('.move-to-top').fadeIn();
}
else {
	$('.move-to-top').fadeOut();
}
});
    $('.move-to-top').click(function(){
      $('html').animate({
	scrollTop : $('#' + $(this).data('value')).offset().top
		},1500);
    });

//////////////////nice scroll
$("html").niceScroll({

cursorcolor:'#da8502',
cursorwidth:'15px',
cursorborderradius:'5px',
cursorborder:'1px solid #da8502;'
});
});