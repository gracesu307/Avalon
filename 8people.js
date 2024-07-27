$(document).ready(function(){
	var role = ["梅林", "派西維爾", "忠臣", "莫甘那", "刺客", "忠臣", "忠臣", "爪牙"];
	var show = [0, 0, 0, 0, 0, 0, 0, 0];

	var open = [0, 0, 0, 0, 0, 0, 0, 0];

	$(".card1").click(function(){
		if(open[0] == 0){
			open[0] = 1;
			var num = Math.floor(Math.random()*8);
			while(show[num] != 0){
				num = Math.floor(Math.random()*8);
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
			var num = Math.floor(Math.random()*8);
			while(show[num] != 0){
				num = Math.floor(Math.random()*8);
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
			var num = Math.floor(Math.random()*8);
			while(show[num] != 0){
				num = Math.floor(Math.random()*8);
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
			var num = Math.floor(Math.random()*8);
			while(show[num] != 0){
				num = Math.floor(Math.random()*8);
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
			var num = Math.floor(Math.random()*8);
			while(show[num] != 0){
				num = Math.floor(Math.random()*8);
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
			var num = Math.floor(Math.random()*8);
			while(show[num] != 0){
				num = Math.floor(Math.random()*8);
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
			var num = Math.floor(Math.random()*8);
			while(show[num] != 0){
				num = Math.floor(Math.random()*8);
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
			var num = Math.floor(Math.random()*8);
			while(show[num] != 0){
				num = Math.floor(Math.random()*8);
			}
			$(".card8").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card8").html("看過");
		}

	});
});