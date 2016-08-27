// initialize variables
  var fake;
  var pos = 0;
  var question;
  var choice;
  var choices;
  var correct = 0;
  var quesNum;
  var chA;
  var chB;
  var chC;
  var chD;
  var timer;
  var lastQ = false;
  var element;
  var lisa = "lisa.jpg";
  var run = 0;

  // 2D list of questions and answers
  var questions = [


  ["Who painted 'The Death of Marat'?", " Georges Seurat", " Jacues-Louise David", " Piet Mondrian", " Max Ernst", "B", "marat.jpg", " Jacues-Louise David"],
  ["Who painted 'The Potato Eaters'?", " Edvard Munch", " Vincent Van Gogh", " Henri Mattise", " Pierre-Auguste Renoir", "B", "Potato.jpg", " Vincent Van Gogh"],
  ["Who painted 'The Anatomy Lesson of Dr. Nicolaes Tulp'?", " Henri Mattise", " Rembrandt Harmenszoon van Rijn", " Edgar Degas", " Eugene Delacroix", "B", "anatomy.jpg", " Rembrandt Harmenszoon van Rijn"],
  ["Who painted 'A Sunday Afternoon on the Island of La Grande Jatte'?", " Edvard Munch", " Caspar David Freidrich", " Amedeo Modigliani", " Georges Seurat", "D", "jatte.jpg", " Georges Seurat"],
  ["Who painted 'The Birth of Venus'?", " Hieronymus Bosch", " Jean-Michel Basquiat", " Sandro Botticelli", " Rembrandt Harmenszoon van Rijn", "C", "venus.jpg", " Sandro Botticelli"],

  ];

 


//clicking start button begins game
function startGame() {
	quesNum = document.getElementById("question");
	quesNum.innerHTML = "<button id='startbtn'> Press Start to Play! </button>";
	$(".pic").hide();
	$("#startbtn").on("click", function() {
		$(".pic").show();
		showQuestion();

	});


}

// function to make a 2 second pause  
function makePause() {
setTimeout(showQuestion, 2000);
};

  // countdown timer fucntion     
  function countDown(secs, elem) {
  	if (run >= 1) {
  		run = 0;
  		clearTimeout(timer);
  	}
  	run += 1;
  	element = document.getElementById(elem);
  	if (secs < 10) {
  		element.innerHTML = ("<h5> Time left to answer question: </h5><h3 id='td'>00:0"+secs+"</h3>");
  	} else {
  		element.innerHTML = ("<h5> Time left to answer question: </h5><h3 id='td'>00:"+secs+"</h3>");
  	}
  	
  	if (secs < 1) {
  		clearTimeout(timer);
  		document.getElementById("question").innerHTML = "TIME UP! The correct answer is " + questions[pos][7] + "!";
  		pos++;
  		secs = 30;
  		console.log(pos);
  		
  		makePause();
  	}

  	secs--;
  	timer = setTimeout('countDown('+secs+',"'+elem+'")', 1000);
  }

  // fucniton changes image
  function changeImage(imge) {
			image = document.getElementById("art");
			image.src = "assets/images/" + imge;
		}

// function shows question answers and associayed content
  function showQuestion() {
  	countDown(30, "status");
  	quesNum = document.getElementById("question");
  	if(pos >= questions.length) {
  		clearTimeout(timer);
  		console.log("fin!");
  		// document.getElementById("timer").innerHTML("");
  		// document.getElementById("status").innerHTML("");
  		$("#status").empty();
  		$("#timer").empty();
  		changeImage(lisa);
  		quesNum.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct</h2>";
  		console.log(pos);
  	}
  	// $("#qNum").html("Question number " + (pos + 1));
  	question = questions[pos][0];
  	chA = questions[pos][1];
  	chB = questions[pos][2];
  	chC = questions[pos][3];
  	chD = questions[pos][4];
  	quesNum.innerHTML = "<h3>Question number " + (pos + 1) + ":</h3>";
  	quesNum.innerHTML += "<h3>"+question+"</h3><br>";
  	quesNum.innerHTML += "<input type='radio' name='choices' value='A'>" + chA + "<br>";
  	quesNum.innerHTML += "<input type='radio' name='choices' value='B'>" + chB + "<br>";
  	quesNum.innerHTML += "<input type='radio' name='choices' value='C'>" + chC + "<br>";
  	quesNum.innerHTML += "<input type='radio' name='choices' value='D'>" + chD + "<br><br>";
  	quesNum.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  	changeImage(questions[pos][6]);
  	
  	if (pos > 6) {
  	$(".kill").hide(200);
  	$(".kill img").hide(200);
  	$(".kill").empty;
  	$("#status").empty;
  	$("#timer").empty;

  	clearTimeout(timer);
  	element.innerHTML = "   ";

  	}
  

  }

 // fxn evaluates user answer
  function checkAnswer() {
  	clearTimeout(timer);
  	choices = document.getElementsByName("choices");
  	for (i=0; i < choices.length; i++) {
  			if (choices[i].checked) {
  				choice = choices[i].value;
  			}
  		}

  		if (choice == questions[pos][5]) {
  			quesNum.innerHTML = "Correct!!";
  			document.getElementById("question").innerHTML = "Correct!!";
  			correct++;
  			makePause();
  			pos++;
  			return;

  		} else {
  			// quesNum.innerHTML = "Wrong, the correct answer is " + question[pos][7] + "!";
  			document.getElementById("question").innerHTML = "Wrong, the correct answer is " + questions[pos][7] + "!";
  			makePause();
  			pos++;
  			return;

  		}
  		pos++;
  		showQuestion();
  	}


  // event listener to for game start
  window.addEventListener("load", startGame, false);
  // window.addEventListener("load", showQuestion, false);