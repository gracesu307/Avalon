$(document).ready(function(){
	var role = ["梅林", "派西維爾", "忠臣", "莫甘那", "刺客"];
	var show = [0, 0, 0, 0, 0];

	var open = [0, 0, 0, 0, 0];

	$(".card1").click(function(){
		if(open[0] == 0){
			open[0] = 1;
			var num = Math.floor(Math.random()*5);
			while(show[num] != 0){
				num = Math.floor(Math.random()*5);
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
			var num = Math.floor(Math.random()*5);
			while(show[num] != 0){
				num = Math.floor(Math.random()*5);
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
			var num = Math.floor(Math.random()*5);
			while(show[num] != 0){
				num = Math.floor(Math.random()*5);
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
			var num = Math.floor(Math.random()*5);
			while(show[num] != 0){
				num = Math.floor(Math.random()*5);
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
			var num = Math.floor(Math.random()*5);
			while(show[num] != 0){
				num = Math.floor(Math.random()*5);
			}
			$(".card5").html(role[num]);
			show[num] = 1;
		}
		else{
			$(".card5").html("看過");
		}

	});
});