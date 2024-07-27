$(document).ready(function(){
	var ac = 0;
	var dc = 0;
	$(".ac").click(function(){
		ac++;
	});
	$(".dc").click(function(){
		dc++;
	});

	$(".check").click(function(){
		$(".ac").html(ac);
		$(".dc").html(dc);
	});

	$(".re").click(function(){
		ac = 0;
		dc = 0;
		$(".ac").html("贊成");
		$(".dc").html("反對");
	});

	var c1 = 0;
	var c2 = 0;
	var c3 = 0;
	var c4 = 0;
	var c5 = 0;

	$(".cir1").click(function(){
		c1++;
		c1 %= 3;
		if(c1 == 0){
			$(".cir1").css("background-color", "white");
			$(".cir1").css("color", "black");
		}
		if(c1 == 1){
			$(".cir1").css("background-color", "green");
			$(".cir1").css("color", "white");
		}
		if(c1 == 2){
			$(".cir1").css("background-color", "red");
			$(".cir1").css("color", "white");
		}
	});

	$(".cir2").click(function(){
		c2++;
		c2 %= 3;
		if(c2 == 0){
			$(".cir2").css("background-color", "white");
			$(".cir2").css("color", "black");
		}
		if(c2 == 1){
			$(".cir2").css("background-color", "green");
			$(".cir2").css("color", "white");
		}
		if(c2 == 2){
			$(".cir2").css("background-color", "red");
			$(".cir2").css("color", "white");
		}
	});

	$(".cir3").click(function(){
		c3++;
		c3 %= 3;
		if(c3 == 0){
			$(".cir3").css("background-color", "white");
			$(".cir3").css("color", "black");
		}
		if(c3 == 1){
			$(".cir3").css("background-color", "green");
			$(".cir3").css("color", "white");
		}
		if(c3 == 2){
			$(".cir3").css("background-color", "red");
			$(".cir3").css("color", "white");
		}
	});

	$(".cir4").click(function(){
		c4++;
		c4 %= 3;
		if(c4 == 0){
			$(".cir4").css("background-color", "white");
			$(".cir4").css("color", "black");
		}
		if(c4 == 1){
			$(".cir4").css("background-color", "green");
			$(".cir4").css("color", "white");
		}
		if(c4 == 2){
			$(".cir4").css("background-color", "red");
			$(".cir4").css("color", "white");
		}
	});

	$(".cir5").click(function(){
		c5++;
		c5 %= 3;
		if(c5 == 0){
			$(".cir5").css("background-color", "white");
			$(".cir5").css("color", "black");
		}
		if(c5 == 1){
			$(".cir5").css("background-color", "green");
			$(".cir5").css("color", "white");
		}
		if(c5 == 2){
			$(".cir5").css("background-color", "red");
			$(".cir5").css("color", "white");
		}
	});

	var dctimes = 0;

	$(".min").click(function(){
		dctimes--;
		$(".times").html(dctimes);
	});
	$(".add").click(function(){
		dctimes++;
		$(".times").html(dctimes);
	});
	$(".re0").click(function(){
		dctimes = 0;
		$(".times").html(dctimes);
	});



});