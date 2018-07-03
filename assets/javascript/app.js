var answerCorrect = 0;
var answerIncorrect = 0;
var unanswered = 0;

var question = [];

var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";


function questions(){
    
    $.getJSON({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    for (i = 0; i < question.length; i++){

        var arr = question[i];
        console.log(arr);
        

    }

};

questions();




