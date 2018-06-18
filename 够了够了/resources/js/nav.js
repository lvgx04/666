$(function(){
	var nav = $(".nav ul li a");
	var navHref = $(".nav ul li a[href='#']");
	$(navHref).css('color', 'black');
	$(nav).mouseover(function(){
			$(this).css('color', 'black');
			$(navHref).css('color','white');
	});
	$(nav).mouseout(function(){
			$(this).css('color', 'white');
			$(navHref).css('color','black');
	});
})