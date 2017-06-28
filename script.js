function onLoad(){
}
$(document).ready(onLoad);

function shakeBall(){
	var ball = $(".ball");
	ball.animate({"margin-top":"0px"}, 400);
	ball.animate({"margin-top":"40px"}, 250);
}

function makePrediction(){
	if ($('#question').val().indexOf('?') > -1){
		$('#output').text(generatePrediction());
	} else {
		$('#output').text('Ask a question!');
	}
	shakeBall();
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

