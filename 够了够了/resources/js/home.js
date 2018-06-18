$(document).ready(function(){
	var i = 0;
	var clone = $(".banner .img li").first().clone();
	$(".banner .img").append(clone);
	var size = $(".banner .img li").length;
	console.log(size);




	
	$(".banner .num li").first().addClass('on');



	var t = setInterval(function(){
		i++;
		move();
	},2000);


	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(function(){
			i++;
			move();
		},2000)
	});



	$(".banner .num li").hover(function(){
		var index = $(this).index();
		i = index;
		$(".banner .img").stop().animate({left: -index*1280}, 500);
		$(this).addClass('on').siblings().removeClass('on');
	});




	$(".banner .btn_pre").click(function () {
        i--;
        move();
    })
	$(".banner .btn_next").click(function () {
        i++;
        move();
    })




	function move() {
	    if (i == size) {
	        $(".banner .img").css({ left: 0 });
	        i = 1;
	    }
	    if (i == -1) {
	        $(".banner .img").css({ left: -(size - 1) * 1280 });
	        i = size - 2;
	    }
	    $(".banner .img").stop().animate({ left: -i * 1280 }, 600);

	    if (i == size - 1) {
	        $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
	    } else {
	        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
	    }
    }

})