window.onload = function() {
	var items = document.getElementsByClassName("item");
	var btn = document.getElementById("btn");
	var difficulty = document.getElementsByClassName("difficulty");
	var s = document.getElementById("step");
	var start = false;
	var diff = 0;
	var step = 0;
	var init = [];

	for(var i = 0;i < 16;i++){
		init[i] = items[i].id;
	}

	var reset = function(){
		for(var i = 0;i < 16;i++){
			items[i].id = init[i];
		}
	}

	for(var i = 0;i < 3;i++){
		difficulty[i].onclick = function(){
			var index;
			for(var j = 0;j < 3;j++){
				if(difficulty[j] == this){
					index = j;
				}
			}
			diff = index + 1;
		}
	}

	var rearrange = function(difficulty){
		var a = [];
		var add = 0;
		while(add < difficulty * 3){
			var num = Math.floor(Math.random()*16);
			if(a.indexOf(num) == -1){
				a.push(num);
				add++;				
			}
		}
		for(var i = 0;i < difficulty;i++){
			var temp = items[a[3*i]].id;
			items[a[3*i]].id = items[a[3*i+1]].id
			items[a[3*i+1]].id = items[a[3*i+2]].id
			items[a[3*i+2]].id = temp;
		}
	}
	
	btn.onclick = function(){
		if(diff == 0){
			alert("Please choose the difficulty first!");
			return;
		}
		reset();
		rearrange(diff);
		step = 0;
		s.value = step;
		start = true;
	}
	
	var findempty = function(clickindex){
		availitems = [];
		if(clickindex  %4 === 0){
			availitems.push(clickindex + 1);
		}
		else if(clickindex % 4 === 3){
			availitems.push(clickindex - 1);
		}
		else{
			availitems.push(clickindex + 1);
			availitems.push(clickindex - 1);
		}
		if(Math.floor(clickindex / 4) === 0){
			availitems.push(clickindex + 4);
		}
		else if(Math.floor(clickindex / 4) === 3){
			availitems.push(clickindex - 4);
		}
		else{
			availitems.push(clickindex + 4);
			availitems.push(clickindex - 4);
		}
		for(var i = 0;i < availitems.length;i++){
			if(items[availitems[i]].id == "item-16"){
				return availitems[i];
			}
		}
		return -1;
	}
	
	var funish = function(){
		for(var i = 0;i < 16;i++){
			if(items[i].id != init[i]){
				return false;
			}
		}
		return true;
	}

	for(var i = 0;i < 16;i++){
		items[i].onclick = function(){
			if(!start){
				alert("Please start first!");
				return;
			}
			var index;
			for(var j = 0;j < 16;j++){
				if(items[j] == this){
					index = j;
				}
			}
			var emptyindex = findempty(index);
			if(emptyindex != -1){
				var temp = items[emptyindex].id;
				items[emptyindex].id = this.id;
				this.id = temp;
				step++;
				s.value = step;
				if(funish()){
					start = false;
					alert("Success!")
				}				
			}		
		}
	}		
}