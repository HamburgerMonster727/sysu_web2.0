var answer = "";
var flag = false;

window.onload = function(){
	var numbers = $(".number");
	for(var i = 0;i < numbers.length;i++){
		numbers[i].onclick = function(){
			if(flag){
				answer = "";
				flag = false;
			}
			answer += "" + this.value;
			$("#result")[0].value = answer; 
		}
	}
	$("#clear")[0].onclick = function(){
		if(flag){
			flag = false;
		}
		answer = "";
		$("#result")[0].value = answer;
	}	
	$("#delete")[0].onclick = function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
		}
		if(answer == "") return;
		answer = answer.substring(0,answer.length-1);
		$("#result")[0].value = answer;
	}	
	$("#point")[0].onclick = function(){
		if(flag){
			answer = "";
			flag = false;
			$("#result")[0].value = answer;
		}
		answer += ".";
		$("#result")[0].value = answer; 
	}	
	$("#left")[0].onclick = function(){
		if(flag){
			answer = "";
			flag = false;
			$("#result")[0].value = answer;
		}
		answer += "(";
		$("#result")[0].value = answer;
	}	
	$("#right")[0].onclick = function(){
		if(flag){
			answer = "";
			flag = false;
			$("#result")[0].value = answer;
		}
		answer += ")";
		$("#result")[0].value = answer;
	}	
	$("#add")[0].onclick = function(){
		if(flag){
			answer = "";
			flag = false;
			$("#result")[0].value = answer;
			return;
		}
		if(answer.charAt(answer.length-1) !== '+'){
			answer += "+";
			$("#result")[0].value = answer;
		}
	}	
	$("#sub")[0].onclick = function(){
		if(flag){
			answer = "";
			flag = false;
			$("#result")[0].value = answer;
		}
		if(answer.charAt(answer.length-1) !== '-'){
			answer += "-";
			$("#result")[0].value = answer;
		}
	}		
	$("#multiply")[0].onclick = function(){
		if(flag){
			answer = "";
			flag = false;
			$("#result")[0].value = answer; 
			return;
		}
		if(answer.charAt(answer.length-1) !== '*'){
			answer += "*";
			$("#result")[0].value = answer;
		}				
	}
	$("#divide")[0].onclick = function(){
		if(flag){
			answer = "";
			flag = false;
			$("#result")[0].value = answer;
			return;
		}

		if(answer.charAt(answer.length-1) !== '/'){
			answer += "/";
			$("#result")[0].value = answer;
		}

	}	
	$("#calculate")[0].onclick = function(){
		try{
			 while(answer[0] == "0" && answer[1] != "*" && answer[1] != "/"){
                answer = answer.substr(1,(answer.length-1));
            }
            for(var i = 0;i < answer.length;i++){
                if(answer[i] == "0"){
                    if(answer[i-1]=="/"){
                        answer=answer.replace("0","") ;
                    }
                }
            }
			answer = eval(answer);
		}		
		catch(exception){
			alert("输入不符合要求，请重新输入");
			answer = "";
			$("#result")[0].value = answer;
			return;
		}		
		answer = parseFloat(answer) ;
        answer = parseFloat(answer.toFixed(12) ) ;	
		$("#result")[0].value = answer;		
		flag = true;
	}
}