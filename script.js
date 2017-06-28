function onLoad(){
}
$(document).ready(onLoad);


function makePrediction(){
	if ($('#question').val().indexOf('?') > -1){
		$('#output').text(generatePrediction());
	} else {
		$('#output').text('Ask a question!');
	}
}

function generatePrediction(){
	var predictions = ['yeah sure', 'no...', 'kinda' ,'probably not', 'um... maybe...', 'absolutely!', 'definitely not'];
	prediction = predictions[Math.floor(Math.random()*predictions.length)];
	return prediction;
}

var ENTER_KEYCODE = 13;
$(document).keypress(function(e){
	if(e.which == ENTER_KEYCODE){
		makePrediction();
	}
});

