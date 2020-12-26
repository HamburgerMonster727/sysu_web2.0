var answer = "";
var flag = false;
window.onload = function(){
	document.getElementById("zero").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "0";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("one").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "1";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("two").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "2";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("three").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "3";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("four").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "4";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("five").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "5";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("six").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "6";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("seveen").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "7";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("eight").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "8";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("nine").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
		}
		answer += "9";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("clear").onclick=function(){
		if(flag){
			flag = false;
		}
		answer = "";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("delete").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
		}
		if(answer=="") return;
		answer =answer.substring(0,answer.length-1);
		document.getElementById("result").value = answer; 
	}
	document.getElementById("point").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
		}
		answer += ".";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("left").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
		}
		answer += "(";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("right").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
		}
		answer += ")";
		document.getElementById("result").value = answer; 
	}
	document.getElementById("add").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
			return;
		}
		if(answer.charAt(answer.length-1) !== '+'){
			answer += "+";
			document.getElementById("result").value = answer; 
		}
	}
	document.getElementById("sub").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
		}
		if(answer.charAt(answer.length-1) !== '-'){
			answer += "-";
			document.getElementById("result").value = answer; 
		}
	}	
	document.getElementById("multiply").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
			return;
		}
		if(answer.charAt(answer.length-1) !== '*'){
			answer += "*";
			document.getElementById("result").value = answer; 
		}			
	}
	document.getElementById("divide").onclick=function(){
		if(flag){
			answer = "";
			flag = false;
			document.getElementById("result").value = answer; 
			return;
		}
		if(answer.charAt(answer.length-1) !== '/'){
			answer += "/";
			document.getElementById("result").value = answer; 
		}
		
		
	}
	document.getElementById("calculate").onclick=function(){
		try{
			while(answer[0] == "0" && answer[1] != "*" && answer[1] != "/"){
                answer = answer.substr(1,(answer.length-1));
            }
            for(var i = 0;i < answer.length;i++){
                if(answer[i] == "0"){
                    if(answer[i-1] == "/"){
                        answer = answer.replace("0","") ;
                    }
                }
            }
			answer = eval(answer);
		}
		catch(exception){
			alert("输入不符合要求，请重新输入");
			answer = "";
			document.getElementById("result").value = answer;
			return;
		}
		answer = parseFloat(answer) ;
        answer = parseFloat(answer.toFixed(12) ) ;	
		document.getElementById("result").value = answer;	
		flag = true;
	}
}