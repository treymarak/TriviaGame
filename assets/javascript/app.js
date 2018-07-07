$(document).ready(function() {

  var questionArray = [
    {
      question:
      "In Marvel Comics, Taurus is the founder and leader of which criminal organization?",
      correct_answer: "Zodiac",
      incorrect_answers: ["Scorpio", "Tiger Mafia" ,"The Union"]
    },
    {
      question:
      "What was the name of the first Robin in the Batman comics?",
      correct_answer: "Dick Grayson",
      incorrect_answers: ["Bruce Wayne", "Jason Todd" ,"Tim Drake"]
    },
    {
      question:
      "Which of the following superheros did Wonder Woman NOT have a love interest in?",
      correct_answer: "Green Arrow",
      incorrect_answers: ["Superman", "Batman", "Steve Trevor"]
    },
    {
      question: "What is the designation given to the Marvel Cinematic Universe?",
      correct_answer: "Earth-199999",
      incorrect_answers: ["Earth-616", "Earth-10005", "Earth-2008"]
    },
    {
      question: "Who created Ultron of Earth-616?",
      correct_answer: "Henry Pym",
      incorrect_answers: ["Amadeus Cho", "Tony Stark", "Reed Richards"]
    },
    {
      question:
      "Which Batman sidekick is the son of Talia al Ghul?",
      correct_answer: "Damian Wayne",
      incorrect_answers: ["Dick Grayson", "Tim Drake", "Jason Todd"]
    },
    {
      question:
      "In the DC Comics 2016 reboot, Rebirth, which speedster escaped from the Speed Force after he had been erased from existance?",
      correct_answer: "Wally West",
      incorrect_answers: ["Johnny Quick", "Jay Garrick", "Eobard Thawne"]
    },
    {
      question:
        "Which city does Green Arrow patrol?",
      correct_answer: "Star City",
      incorrect_answers: ["Gotham City", "Central City", "Bludhaven"]
    },
    {
      question:
      "Which comic book character hails from the fictional nation of Wakanda?",
      correct_answer: "Black Panther",
      incorrect_answers: ["Thor", "Iron Man", "War Machine"]
    },
    {
      question:
        "Who is the Scarlet Witch's twin brother?",
      correct_answer: "Quicksilver",
      incorrect_answers: ["Magneto", "Hulk", "Wolverine"]
    }
  ];

  

  var index = 0;
  var currentQuestion = questionArray.question;
  const NUMBER_OF_QUESTIONS = 10;

  function appInit() {
    prepareDataset();
    setupNewQuestion();
  }

  function prepareDataset() {
    // Making ajax call and storing data in questionArray[];
    //standard ajax call
    for (i = 0; i < currentQuestion.length; i++){

    }
   
    console.log(currentQuestion);
    
  }
   
  function setupNewQuestion() {
    // Pull a question
    // DELETE that question from the array
    // setup our interface to reflect new question
    // start that timer

    $("#inquiry").text(currentQuestion);

    var newQuestion = questionArray.splice(currentQuestion, 1)[0];

    $("#inquiry").text(newQuestion);

    start();
     

    //put question in currentQuestion,
    // and remove it from questionArray

  }

  function handleAnswer() {

  }

  function timerRanOut() {

  }

//----------------------------

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


// var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";
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
