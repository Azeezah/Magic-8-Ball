function onLoad(){
}
$(document).ready(onLoad);

function shakeBall(){
	var ball = $(".ball");
	var text = $('#whitepart')
	text.addClass('predictionText');

	ball.animate({"margin-top":"0px"}, 600, 
		function(){
			ball.animate({"margin-top":"40px"}, 250, 
				function(){
					text.removeClass('predictionText');
					text.text('8');
				}
			);
		}
	);
}

function makePrediction(){
	if ($('#question').val().indexOf('?') > -1){
		$('#whitepart').text(generatePrediction());
	} else {
		$('#whitepart').text('Ask a question!');
	}
	shakeBall();
}

function generatePrediction(){
	var predictions = ['yep', 'I would say so', 'yeah sure', 'no...', 'kinda' ,'probably not', 'um... maybe...', 'absolutely!', 'definitely not'];
	prediction = predictions[Math.floor(Math.random()*predictions.length)];
	return prediction;
}


var ENTER_KEYCODE = 13;
$(document).keypress(function(e){
	if(e.which == ENTER_KEYCODE){
		makePrediction();
	}
});

