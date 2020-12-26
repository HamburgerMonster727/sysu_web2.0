window.onload = function() {
	var play = false;
	var cheat = false;	
	function setResult(message){
		$("#result")[0].textContent = message;
		$("#result")[0].setAttribute("enable", "");
	}	
	function resetResult(){
		$("#result")[0].removeAttribute("enable");
	}	
	function setWall(){
		$(".wall").css("background-color", "#FF0000");
	}	
	function resetWall(){
		$(".wall").css("background-color", "#F0F0F0");
	}		
	$("#graph").mouseleave(function(){
		if(!play){
			resetWall();
			return;
		}
		else{
			cheat = true;
		}
	});	
	$("#start").mouseover(function(){
		play = true;
		cheat = false;
		resetResult();
		resetWall();
	});	
	$("#end").mouseover(function(){
		if(play && !cheat){
			setResult("You Win");
			play = false;
		}
		else if(play && cheat){
			setResult("Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!");
			play = false;
		}
		else{
			play = false;
		}
	});	
	$(".wall").mouseover(function(){
		if(play && !cheat){
			setResult("You Lose");
			setWall();
			play = false;
		}
		else if(play && cheat){
			setResult("Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!");
			setWall();
			play = false;
		}
	});
}