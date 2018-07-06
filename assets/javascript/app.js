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


function questions(){
    
    $.getJSON({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.results[0].question);
    });
    

};

questions();

});


