window.onload = function() {
	const graph = document.getElementById("graph");
	const result = document.getElementById("result");
	var wall = document.getElementsByClassName("wall");
	const start = document.getElementById("start");
	const end = document.getElementById("end");
	var play = false;
	var cheat = false;
	function setResult(message){
		result.textContent = message;
		result.setAttribute("enable", "");
	}
	function resetResult(){
		result.removeAttribute("enable");
	}
	function setWall(){
		for(var i = 0;i < wall.length;i++){
			wall[i].style.backgroundColor="#FF0000";
		}
	}
	function resetWall(){
		for(var i = 0;i < wall.length;i++){
			wall[i].style.backgroundColor="#F0F0F0";
		}
	}
	graph.addEventListener("mouseleave",function(){
		if(!play){
			resetWall();
			return;
		}
		else{
			cheat = true;
		}
	})
	start.addEventListener("mouseover",function(){
		play = true;
		cheat = false;
		resetResult();
		resetWall();
	})
	end.addEventListener("mouseover",function(){
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
	})
	for(var i = 0;i < wall.length;i++){
		wall[i].addEventListener("mouseover",function(){
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
	    })
	}
}