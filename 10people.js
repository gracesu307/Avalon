$(document).ready(function(){
	var role = ["梅林", "派西維爾", "忠臣", "莫甘那", "刺客", "忠臣", "忠臣", "忠臣", "莫德雷德", "奧伯倫"];
	var show = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	var open = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	$(".card1").click(function(){
		if(open[0] == 0){
			open[0] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card1").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card1").html("看過");
		}

	});

	$(".card2").click(function(){
		if(open[1] == 0){
			open[1] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card2").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card2").html("看過");
		}

	});

	$(".card3").click(function(){
		if(open[2] == 0){
			open[2] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card3").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card3").html("看過");
		}

	});

	$(".card4").click(function(){
		if(open[3] == 0){
			open[3] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card4").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card4").html("看過");
		}

	});
	$(".card5").click(function(){
		if(open[4] == 0){
			open[4] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card5").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card5").html("看過");
		}

	});
	$(".card6").click(function(){
		if(open[5] == 0){
			open[5] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card6").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card6").html("看過");
		}

	});
	$(".card7").click(function(){
		if(open[6] == 0){
			open[6] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card7").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card7").html("看過");
		}

	});
	$(".card8").click(function(){
		if(open[7] == 0){
			open[7] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card8").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card8").html("看過");
		}

	});
	$(".card9").click(function(){
		if(open[8] == 0){
			open[8] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card9").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card9").html("看過");
		}

	});
	$(".card10").click(function(){
		if(open[9] == 0){
			open[9] = 1;
			var num = Math.floor(Math.random()*10);
			while(show[num] != 0){
				num = Math.floor(Math.random()*10);
			}
			$(".card10").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card10").html("看過");
		}

	});
});