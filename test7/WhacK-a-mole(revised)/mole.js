window.onload = function() {
	var radios = $("input[name='radio']");
	var randomValue;
	var playing = false;
	var scoresValue = 0;
	var time = $("#time")[0];
	
	$("#graph").click( function(event) {
		if (event.target.name == "radio" && playing == true) {
			if (event.target.value == randomValue) {
				scoresValue += 1;
				randomValue = parseInt(60 * Math.random());
				radios[randomValue].checked = true;
			} 
			else {
				if(scoresValue > 0) {
					scoresValue -= 1;
					radios[randomValue].checked = true;
					radios[event.target.value].checked = false;
				}
				else {
					scoresValue = 0;
					radios[randomValue].checked = true;
					radios[event.target.value].checked = false;
				}
			}
			$("#score")[0].value = scoresValue;
		} 
		else if (event.target.name == "radio" && playing == false) {
			radios[event.target.value].checked = false;
		}
	});
	
	function timeM() {		
		var timeValue = parseInt(time.value);
		if (timeValue != 0) {
			timeValue -= 1;
			time.value = timeValue;
		} 
		else {
			playing = false;
			$("#result")[0].value = "Game Over";
			clearInterval(clock);
			$("input[name='radio']").prop("checked",false);
		}
	}

	$("#start").click(function clickStart() {
		if ($("#result")[0].value == "Playing") {
			$("#result")[0].value = "Game Over";
			time.value = "0"
			$("#score")[0].value = scoresValue;
			timeM();
		} 
		else {
			time.value = "30";
			$("#score")[0].value = "0";
			scoresValue = 0;
			clock = window.setInterval(timeM, 1000);
			$("#result")[0].value = "Playing";
			randomValue = parseInt(60 * Math.random());
			radios[randomValue].checked = true;
			playing = true;
		}
	}); 	
}