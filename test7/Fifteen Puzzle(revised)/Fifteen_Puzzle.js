window.onload = function() {
	var items = $(".item");
	var difficulty = $(".difficulty");
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

	$(".difficulty").click(function(){
		diff = _.indexOf(difficulty, this)+1;
	});	

	var rearrange = function(difficulty){
		var a = [];
		var add = 0;
		while(add < difficulty*3){
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

	$("#btn")[0].onclick = function(){
		if(diff == 0){
			alert("Please choose the difficulty first!");
			return;
		}
		reset();
		rearrange(diff);
		step = 0;
		$("#step")[0].value = step;
		start = true;
	}	

	var findempty=function(clickindex){
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

	$(".item").click(function(){
		if(!start){
			alert("Please start first!");
			return;
		}
		var emptyindex = findempty(_.indexOf(items, this));
		if(emptyindex != -1){
			var temp = items[emptyindex].id;
			items[emptyindex].id = this.id;
			this.id = temp;
			step++;
			$("#step")[0].value = step;
			if(funish()){
				start = false;
				alert("Success!")
			}				
		}		
	});			
}