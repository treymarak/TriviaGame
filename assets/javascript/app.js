$(document).ready(function() {

  var index = 0;
  var questionArray = [];
  var currentQuestion;
  const NUMBER_OF_QUESTIONS = 10;
  const SECONDS_PER_QUESTION = 30;
  var secondsRemaining = 0;

  function appInit() {
    prepareDataset();    
  }

  function prepareDataset() {
    var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";
    var correct = 0;
    var incorrect = 0;
    
    $.getJSON({       
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(response);
      
      for(var i = 0 ; i < response.results.length; i++) {
        var question = {};
        question["question"] = response.results[i].question;
        question["answers"] = [];
        question["answers"][0] = {answer: response.results[i].correct_answer, is_correct: true};
        for (var j = 0; j < response.results[i].incorrect_answers.length; j++) {
          question["answers"][j+1] = {answer: response.results[i].incorrect_answers[j], is_correct: false};  
        }
        questionArray.push(question);
      }

      $('#loading-text').hide();
      $('#startButton').show();

      console.log(questionArray);

    });
  }
   
  function resetListItems() {
    for (var i = 1; i < 5; i++) {
      $('#option' + i).show();
    }
  }

  function setupNewQuestion() {

    resetListItems();

    if (questionArray.length == 0) {
      doQuizComplete();
    }

    // Shuffle the array to make it interesting...
    // This way we can just pop them off one by one.
    currentQuestion = questionArray.pop();
    console.log("Current Question", currentQuestion);


    // You were close on this next line, but we have to remember that 
    // our currentQuestion holds the entire question object, so we need
    // to refer to exactly what we want (.question in this case)  :-)

    $("#inquiry").text(currentQuestion.question);

    // Shuffle the answers
    currentQuestion.answers = shuffle(currentQuestion.answers);
    console.log("Post Shuffle Answers:", currentQuestion.answers);

    for (var i = 0; i < currentQuestion.answers.length; i++) {
      var currAns = currentQuestion.answers[i].answer;
      console.log(currAns);
      $("#option" + (i + 1)).text(currentQuestion.answers[i].answer);
      var currCor = currentQuestion.answers[i].is_correct;
      console.log(currCor);
      $("#option" + (i + 1)).data("correct", currentQuestion.answers[i].is_correct);
    }

    secondsRemaining = SECONDS_PER_QUESTION;
    setTimeout(startTimer, 1000);

  }

  function doQuizComplete() {
    alert("Quiz is complete!  Thanks for playing!");
  }

  $("#startButton").on("click", function(event) {
    event.preventDefault();
    $("#startButton").hide();
    setupNewQuestion();
  });

  $(".optionChoice").on("click", function(event) {
    console.log("Option clicked!");
    console.log($(this).data('correct'));

    if ($(this).data('correct') === true) {
      alert("You got it!");
      setupNewQuestion();  
    }
    else {
      // User clicked a wrong answer.
      // I just made it hide the wrong that was just selected,
      // but make it your own obviously!
      $(this).hide();
    }
  });

  function doWinningStuff() {
    alert("You win!");
  }

  function handleAnswer() {

  }

  function timerRanOut() {

  }

//----------------------------

function startTimer() {
    secondsRemaining--;  
    
    if (secondsRemaining >= 0){
      $("#timer").html("<h3> " + secondsRemaining + " seconds remaining </h3>");
    }
    else {
      index++;
      //  answerWrong();
      console.log("!!", this); 
      this.reset();
 
      if (index < trivia.length) {
        questions(index);
      } 
      else {
       $(".optionChoice").hide();
       showScore();
      }
    }

    setTimeout(startTimer, 1000);
}


  function start() {
    counter = setInterval(countdownTimer.count, 1000);
  }

  function stop() {
    clearInterval(counter);
  }

  function reset() {
    this.time = 30;
    $("#timer").html("<h3> " + countdownTimer.time + " seconds remaining </h3>"); 
  }
  

// JH: Notes below, and sweet array shuffle function courtesy of:
//  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array


//The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.

//See https://github.com/coolaj86/knuth-shuffle

//You can see a great visualization here (and the original post linked to this)

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  var countdownTimer = {

    time : 30,

    //reset: function() {

    //this.time = 30;

    //$("#timer").html("<h3> " + countdownTimer.time + " seconds remaining </h3>");

    //},

   //start: function(){

   //counter = setInterval(countdownTimer.count, 1000);

   //},

   //stop: function(){

   //clearInterval(counter);

   //},

   count: function(){

   countdownTimer.time--;
   console.log(this.time);

   if (countdownTimer.time >= 0){
     $("#timer").html("<h3> " + countdownTimer.time + " seconds remaining </h3>");
   }
   else {
     index++;
     //  answerWrong();
     console.log("!!", this); 
     this.reset();

     if (index < trivia.length) {
       questions(index);
     } 
     else {
      $(".optionChoice").hide();
      showScore();
     }
   }


   }

   

  };


//var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";
// var correct = 0;
// var incorrect = 0;

// function questions(){

//   countdownTimer.reset();
    
//     $.getJSON({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//       console.log(response.results[0].question);
//       console.log(response.results[0].correct_answer);
//       console.log(response.results[0].incorrect_answers);

//       var trivia = response.results[0].question;
//       var answer = response.results[0].correct_answer;
      
//       var answers = [response.results[0]]

//       $("#inquiry").text(trivia);
//       $("#option1").text(answer);
//       $("#option2").text(response.results[0].incorrect_answers[0]);
//       $("#option3").text(response.results[0].incorrect_answers[1]);
//       $("#option4").text(response.results[0].incorrect_answers[2]);

//     });
    

// };



// function setup(){

// index = 0;

// $("#startButton").on("click", function(){

//   $(this).hide();
//   countdownTimer.start();
//   questions(index);

// });


// }

// function getAnswer(){

// $(".optionChoice").on("click", function(){

// console.log("alert", index);

// index++;

// console.log("click", index);
// $("#inquiry").text('');
// 		$("#option1").text('');
// 		$("#option2").text('');
// 		$("#option3").text('');
//     $("#option4").text('');
    
//    questions();

// });


// }

// function answerCorrect(){

// correct++;

// alert("Correct!!");

// console.log("correct");


// }

// function answerWrong(){

//   incorrect++;
  
//   alert("Wrong!!");
  
//   console.log("wrong");

// }

// function showScore(){

//   $("#inquiry").empty();
//   $("#inquiry").append("<h2><p>" + correct + " correct</p></h2>");
//   $("#inquiry").append("<h2><p>" + incorrect + " correct</p></h2>");
//   countdownTimer.stop();
//   $("#timer").empty();


// }

// setup();
// $(".optionChoice").on("click", function(){

//   console.log($(this));
//   console.log("correct answer", response.results[0].correct_answer)
 
//  if (response.results[0].correct_answer){

//     answerCorrect();

//  }

//  else{

//    answerWrong();


//  }

//     $("#inquiry").text('');
// 		$("#option1").text('');
// 		$("#option2").text('');
// 		$("#option3").text('');
//     $("#option4").text('');

//     index++;
//     if (index < trivia.length) {
//       questions(index);

//     } 
    
//     else {
//       $(".optionChoice").hide();
//       showScore();
//     }
// });


appInit();

});
