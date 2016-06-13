$(document).ready(function(){
	var timer; 
	var correct = 0;
	var wrong = 0;
	var  currentQ = {
		question:" ",
		right: " ",
		choices:[], 
	}
	var r = 0;

	var questions = [

		q1 = {question: 'How many dreams does the average person have a year?',
			right: 1460,
			choices: [1000, 1460, 340, 2054]
			},
		q2= {question: 'Which of these animals porportional to their weight, are stronger than horses?',
			right: 'human male',
			choices:['chipmunk', 'goat', 'human male', 'elephanet'],
		},
		q3= {question: 'Half of all americans live within 50 miles of what?',
			right: 'their birthplace',
			choices:['an airport', 'a sports stadium', 'their birthplace', 'their favorite vacation spot'],

		}
	]
	function setQuestion () {
		//timer.start();
		currentQ = questions[r];
		console.log(currentQ);
		$('#question').html(currentQ.question);
		for(i=0; i<currentQ.choices.length; i++){
			$('#choice'+ parseInt(i+1)).html( '<button class="btnChoice" id="'+ (i+1) + ' val=' + currentQ.choices[i] + '">' + (i+1)+ '</button>' + currentQ.choices[i]);
		}
		r++; 
	}

	$('#start').on('click', function(){
		$('#start').hide();
		setQuestion();

		
	});

	$('.btnChoice').on('click', function(){})
	var timer = {

	}
	


});
