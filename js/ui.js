/* ui.js - p5: timex  */ 

$(function(){
	//clock
	var barNum1 = 0;
	var barNum2 = 0;
	setInterval(function(){
		var objDate = new Date(),
			hours = objDate.getHours(),
			minutes = objDate.getMinutes(),
			seconds = objDate.getSeconds();
		
		hours = (360/12)*hours+(30/60)*minutes; 
		minutes = (360/60)*minutes+(6/60)*seconds;
		seconds = (360/60)*seconds;
		barNum1 = barNum1 +12;
		barNum2 = barNum2 +30;

		hours = "rotate("+hours+"deg)";
		minutes = "rotate("+minutes+"deg)";
		seconds = "rotate("+seconds+"deg)";
		bar1 = "rotate("+barNum1+"deg)";
		bar2 = "rotate("+barNum2+"deg)";
		
		$(".hours").css({transform:hours});
		$(".minutes").css({transform:minutes});
		$(".seconds").css({transform:seconds});
		$(".bar_01").css({transform:bar1});
		$(".bar_02").css({transform:bar2});
	},1000);

	var objDate = new Date(),
		hours = objDate.getHours(),
		minutes = objDate.getMinutes(),
		seconds = objDate.getSeconds();
	
	$(".time").text("타이맥스가 알려드리는 현재 시간은" + hours +"시"+ minutes +"분"+ seconds + "초 입니다.")

	//main visual text ani

	var $el = $('.banner_main .wrap_copy');
	setInterval(function(){
		$el.addClass('active');
		setTimeout(function(){
			$el.removeClass('active');
		},4900);
	},5000);
});

window.onload = function(){
	//top notice
	var $top_notice = $('.wrapper .top_notice'),
		$close = $top_notice.find('.btn_close');

		$top_notice.css("height",0);
		$top_notice.animate({height:150},500);
		$close.on('click',function(){
			$top_notice.animate({height:0},500);
		});
}