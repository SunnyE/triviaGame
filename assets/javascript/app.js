$(document).ready(function(){
	$('.questions').hide();
	$('#info').hide();
	$('#restart').hide();
	var correct = 0;
	var wrong = 0;
	var currentQ = {
		question:" ",
		right: " ",
		choices:[], 
	}
	var r = 0;
	var guess;
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
	 var clock = {
		time: 20,
		int1:0,
		int2:0,
		reset:function() {
			clock.time = 20; 
			$('#timerem').html(clock.time);
		},
		count: function() {
			clock.time--;
			$('#timerem').html(clock.time);
		},
		start:function() {
			int1 = setInterval(clock.count, 1000);
			int2 = setTimeout(clock.out, 20000);
		},
		stop: function (){
			clearInterval(int1);
			clearTimeout(int2);
		},
		out: function() {
			clock.stop();
			$('#info').show();
			$('#info').html('wrong! the correct answer was ' + currentQ.right + '!');
			$('.questions').hide();
			wrong++;
			setTimeout(setQuestion, 3000);
			
		}


	}


	function setQuestion () {
		$('#restart').hide();
		if(r < questions.length){
			clock.reset();
			clock.start();
			$('#info').hide();
			$('.questions').show();
			currentQ = questions[r];
			console.log(currentQ);
			$('#question').html(currentQ.question);
				for(i=0; i<currentQ.choices.length; i++){
					$('#choice'+ parseInt(i+1)).html( currentQ.choices[i]);
					$('#'+ parseInt(i+1)).attr('value', currentQ.choices[i]);
			}
		r++; 

		} else {
		$('.questions').hide();
		$('#info').show();
		$('#info').html('game has ended you got ' + correct + ' questions correct and ' + wrong + ' questions wrong');
		$('#restart').show();
		}

	}; 
	 
	$('#start').on('click', function(){
		$('#start').hide();
		setQuestion();	
	});
	$('#restart').on('click', function(){
		$('#restart').hide();
		r=0;
		correct=0;
		wrong=0; 
		setQuestion();	

	});

	$('.btnChoice').click(function(){
		guess = $(this).attr("value"); 
		console.log($(this).attr("value"));
		if($(this).attr("value") == currentQ.right){
			$('#info').show();
			$('#info').html('correct!')
			$('.questions').hide();;
			clock.stop();
			setTimeout(setQuestion, 3000);
			correct++;
		}  else {
			$('#info').show();
			$('#info').html('wrong! the correct answer was ' + currentQ.right + '!');
			$('.questions').hide();
			clock.stop();
			setTimeout(setQuestion, 3000);
			wrong++;
		}
	}); 
	var q = questions.length; 
	console.log(questions.length)
	var timer = {

	}
	


});
