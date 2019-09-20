// JavaScript Document
$(document).ready(function(){
	var slide_div=$("#slide_div");
	var slide_ul=slide_div.find("ul");
	var number=$("#slide_span").find("span");
	var sw=0;
	number.on("click",function(){
		sw=$(this).index();
		$(this).addClass("span_active").siblings("span").removeClass("span_active");
		slide_ul.animate({
			"right":sw*520,
		});
	});
	$("#left").stop(true,true).click(function(){
		sw++;
		if(sw==number.length){
			sw=0;
		}else{
			number.eq(sw).trigger("click");
		}
	});
	$("#right").stop(true,true).click(function(){
		sw--;
		if(sw==number.length){
			sw=0;
		}else{
			number.eq(sw).trigger("click");
		}
	});
	var timer=setInterval(function(){
		sw++;
		if(sw==number.length){sw=0}else{
			number.eq(sw).trigger("click");
		}
		number.eq(sw).trigger("click");
	},2000);
	slide_div.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			sw++;
			if(sw==number.length){sw=0}else{
				number.eq(sw).trigger("click");
			}
		},2000);
	});
});