$(function(){
	$(".portrait-img").on("mouseover",function(){
		//console.log($(this));
		$(this).css({"opacity":"0.5"});
		$(this).next().css({"opacity":"1"});
	})

	$(".portrait-img").on("mouseout",function(){
		//console.log($(this));
		$(this).css({"opacity":"1"});
		$(this).next().css({"opacity":"0"});
	})

	$("#menuitem").on("click",function(){
		
		$("#navbar").css({"transform":"translate(0%)"});
		$(this).css({"transform":"translate(750%)"});
	})

	$("#navbar").on("mouseout",function(){
		
		$(this).css({"transform":"translate(-100%)"});
		$("#menuitem").css({"transform":"translate(0%)"});
		
	})

})