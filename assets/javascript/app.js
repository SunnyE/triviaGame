$(document).ready(function(){
	$('.questions').hide();
	$('.info').hide();
	$('#restart').hide();
	var correct = 0;
	var wrong = 0;
	var currentQ = {
		question:" ",
		right: " ",
		choices:[], 
	}
	var background = new Audio("assets/audio/background.mp3");
	var what = new Audio("assets/audio/what.mp3");
	background.play();
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
		},
		q4= {question: 'How many different shapes do animal crackers come in?',
			right: '18',
			choices:['8', '18', '12', '40'],
		},
		q5= {question: 'Dragonflys have a lifespan of how long?',
			right: '24 hours',
			choices:['24 hours', 'a week', 'three days', 'one month'],
		},
		q6= {question: 'In 1796 there was a state called Franklin, that state is now known as?',
			right: 'Tennessee',
			choices:['New Hampshire', 'Virginia', 'Tennessee', 'Pennsylvania'],
		},
		q7= {question: 'What do 100% of lottery winners do?',
			right: 'Gain weight',
			choices:['End up happy', 'Donate to charity', 'Go broke', 'Gain weight'],
		},
		q8= {question: 'The longest recorded flight of a chicken is how long?',
			right: '13 seconds',
			choices:['a minute', '13 seconds', '30 seconds', '8 seconds'],
		},
		q9= {question: 'A rat can tread water for how long?',
			right: '3 days',
			choices:['3 days', '3 hours', '4 hours', '1 day'],
		},
		q10= {question: 'Donald Duck comics were banned in which country because of his lack of pants?',
			right: 'Finland',
			choices:['Germany', 'Finland', 'Russia', 'Mexico'],
		},
		q11= {question: 'American Airlines saved how much money from taking 1 olive out of first class salads?',
			right: '$40,000',
			choices:['$3,000', '$100,000', '$40,000', '$24,000'],
		},
	]
	 var clock = {
		time: 20,
		int1:0,
		int2:0,
		reset:function() {
			clock.time = 20; 
			$('#timerem').html("time remaing: " + clock.time);
		},
		count: function() {
			clock.time--;
			$('#timerem').html("time remaing: " + clock.time);
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
			$('.info').show();
			$('#info').html('wrong! the correct answer was ' + currentQ.right + '!');
			$('.questions').hide();
			what.play();
			wrong++;
			setTimeout(setQuestion, 3000);
			
		}


	}


	function setQuestion () {
		$('#restart').hide();
		if(r < questions.length){
			clock.reset();
			clock.start();
			$('.info').hide();
			$('.questions').show();
			currentQ = questions[r];
			console.log(currentQ);
			$('#question').html(currentQ.question);
				for(i=0; i<currentQ.choices.length; i++){
					$('#'+ parseInt(i+1)).attr('value', currentQ.choices[i]);
					$('#'+ parseInt(i+1)).html(currentQ.choices[i]);
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
			$('.info').show();
			$('#info').html('correct!')
			$('.questions').hide();;
			clock.stop();
			setTimeout(setQuestion, 3000);
			var right = new Audio("assets/audio/right.mp3");
			right.play();
			correct++;
		}  else {
			$('.info').show();
			$('#info').html('wrong! the correct answer was ' + currentQ.right + '!');
			$('.questions').hide();
			clock.stop();
			setTimeout(setQuestion, 3000);
			what.play();
			wrong++;
		}
	}); 
	var q = questions.length; 
	console.log(questions.length)
	var timer = {

	}
	


});
