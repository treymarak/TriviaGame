$(document).ready(function() {

  var index = 0;

  var countdownTimer = {

    time : 30,

    reset: function() {

    this.time = 30;

    $("#timer").html("<h3>" + this.time + "seconds remaining</h3>");

    },

   start: function(){

   counter = setInterval(this.count, 1000);

   },

   stop: function(){

   clearInterval(counter);

   },

   count: function(){

   this.time--;
   console.log(this.time);

   if (this.time >= 0){

    $("#timer").html("<h3>" + this.time + "seconds remaining</h3>");
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


var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";
var correct = 0;
var incorrect = 0;

function questions(){

  countdownTimer.reset();
    
    $.getJSON({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.results[0].question);
      console.log(response.results[0].correct_answer);
      console.log(response.results[0].incorrect_answers);

      var trivia = response.results[0].question;
      var answer = response.results[0].correct_answer;
      

      $("#inquiry").text(trivia);
      $("#option1").text(answer);
      $("#option2").text(response.results[0].incorrect_answers[0]);
      $("#option3").text(response.results[0].incorrect_answers[1]);
      $("#option4").text(response.results[0].incorrect_answers[2]);

      

    });
    

};



function setup(){

index = 0;

$("#startButton").on("click", function(){

  $(this).hide();
  countdownTimer.start();
  questions(index);

});


}

function getAnswer(){

$(".optionChoice").on("click", function(){

console.log("alert", index);

index++;

console.log("click", index);
$("#inquiry").text('');
		$("#option1").text('');
		$("#option2").text('');
		$("#option3").text('');
    $("#option4").text('');
    
   questions();

});


}

function answerCorrect(){

correct++;

alert("Correct!!");

console.log("correct");


}

function answerWrong(){

  incorrect++;
  
  alert("Wrong!!");
  
  console.log("wrong");

}

function showScore(){

  $("#inquiry").empty();
  $("#inquiry").append("<h2><p>" + correct + " correct</p></h2>");
  $("#inquiry").append("<h2><p>" + incorrect + " correct</p></h2>");
  countdownTimer.stop();
  $("#timer").empty();


}

setup();
$(".optionChoice").on("click", function(){

  console.log($(this));
  console.log("correct answer", response.results[0].correct_answer)
 
 if (response.results[0].correct_answer){

    answerCorrect();

 }

 else{

   answerWrong();


 }

    $("#inquiry").text('');
		$("#option1").text('');
		$("#option2").text('');
		$("#option3").text('');
    $("#option4").text('');

    index++;
    if (index < trivia.length) {
      questions(index);

    } 
    
    else {
      $(".optionChoice").hide();
      showScore();
    }
});



});
