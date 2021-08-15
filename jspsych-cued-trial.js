jsPsych.plugins['cued-trial'] = (function(){

  	var plugin = {};
	var text;

	plugin.trial = function(display_element, trial){
		trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);
		text = trial.prompt;
		display_element.append('<div class="square" id="cueFrame"></div>');
		document.body.requestPointerLock();
	  	document.getElementById("cueFrame").style.display = "block";
		setTimeout(addTextToCue, 1);
	 }

 	  	var addTextToCue = function() {
			document.getElementById("cueFrame").innerHTML = text;
			setTimeout(hideCue, 750);
		}
		var hideCue = function(){
			document.getElementById("cueFrame").style.display = "none";
			document.getElementById("cueFrame").innerHTML = "";
			jsPsych.finishTrial();
		}

  return plugin;

})();