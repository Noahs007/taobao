// JavaScript Document
$(document).ready(function(){
	$(".slide_left,.slide_right").hide();//轮播图左右按钮默认不可见
	var slide_div=$("#slide_div");
	var ul=slide_div.find("ul");
	var number=$("#slide_span").find("span");
	var onewidth=slide_div.find("ul li").eq(0).width();
	var sw=0;
	//轮播图小圆点点击
	number.on("click",function(){
		$(this).addClass("slide_active").siblings("span").removeClass("slide_active");
		sw=$(this).index();
		ul.animate({
			"right":-onewidth*sw,
		});
	});
	//左侧按钮点击
	$(".slide_left").stop(true,true).click(function(){
		sw--;
		if(sw==number.length){
			sw=0;
		}
		number.eq(sw).trigger("click");
	});
	//右侧按钮点击
	$(".slide_right").stop(true,true).click(function(){
		sw++;
		if(sw==number.length){
			sw=0;
		}
		number.eq(sw).trigger("click");
	});
	//自动轮播
	var timer=setInterval(function(){
		sw++;
		if(sw==number.length){sw=0;}
		number.eq(sw).trigger("click");
	},4000);
	//轮播图鼠标移入，停止切换图片
	slide_div.hover(function(){
		$(".slide_left").show();		//轮播图左右按钮可见
		$(".slide_right").show();
		clearInterval(timer);			//清除自动轮播
		},function(){
		$(".slide_left").hide();		//鼠标移出，轮播图按钮不可见
		$(".slide_right").hide();
		var timer=setInterval(function(){	//鼠标移出，添加自动轮播
			sw++;
			if(sw==number.length){
				sw=0;
			}number.eq(sw).trigger("click");
		},4000);
	});
	
	
	//天猫轮播图
	$("#tianmao_pre,#tianmao_next").hide();
	var tm_slide=$("#tianmao_slide");
	var tm_number=$("#tianmao_box").find("span");
	var tm_ul=tm_slide.find("ul");
	var tm_sw=0;
	var tm_length="/"+tm_number.length;
	var tm_width=tm_slide.find("ul li").eq(0).width();
	tm_number.click(function(){
		$(this).addClass("tianmao_active").siblings("span").removeClass("tianmao_active");
		tm_sw=$(this).index();
		tm_ul.animate({
			"left":-tm_sw*tm_width,
		});
		$("#number_tm").text((tm_sw+1)+tm_length);
	});
	$("#tianmao_pre").stop(true,true).click(function(){
		tm_sw--;
		if(tm_sw==tm_number.length){tm_sw=0;}
		tm_number.eq(tm_sw).trigger("click");
	});
	$("#tianmao_next").stop(true,true).click(function(){
		tm_sw++;
		if(tm_sw==tm_number.length){tm_sw=0;}
		tm_number.eq(tm_sw).trigger("click");
	});
	var tm_timer=setInterval(function(){
		tm_sw++;
		if(tm_sw==tm_number.length){tm_sw=0;}
		tm_number.eq(tm_sw).trigger("click");
	},4000);
	tm_slide.hover(function(){
		$("#tianmao_pre,#tianmao_next").show();
		clearTimeout(tm_timer);
		},function(){
			$("#tianmao_pre,#tianmao_next").hide();
			var tm_timer=setInterval(function(){
				tm_sw++;
				if(tm_sw==tm_number.length){tm_sw=0;}
				tm.eq(tm_sw).trigger("click");
		},4000);
	});
});
