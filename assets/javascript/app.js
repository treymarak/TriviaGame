$(document).ready(function() {

  var index = 0;

  var countdownTimer = {

    time : 30,

    reset: function() {

    this.time = 30;

    $("#timer").html("<h3>" + this.time + "seconds remaining</h3>");

    },

   start: function(){

   counter = setInterval(countdownTimer.count, 1000);

   },

   stop: function(){

   clearInterval(counter);

   },

   count: function(){

   countdownTimer.time--;
   console.log(countdownTimer.time);

   if (countdownTimer.time >= 0){

    $("#timer").html("<h3>" + this.time + "seconds remaining</h3>");
}

   else {

   index++;
   
   countdownTimer.reset();


   }

   }

   

  }


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



});



function setup(){

index = 0;

$("#inquiry").append("<button id='startButton'>Start</button>");
$("#startButton").on("click", function(){

  $(this).hide();
  countdownTimer.start();
  questions(index);

});


}

function getAnswer(){

$(".options").on("click", function(){

index++;

$("#inquiry").text('');
		$("#option1").text('');
		$("#option2").text('');
		$("#option3").text('');
    $("#option4").text('');
    
   questions();

});




}

