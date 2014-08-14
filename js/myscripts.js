//$("#startButton").on('click',function(){
	//$("#welcomeText").hide();
	//$(".theQuiz").show();
	//$("#quoteOne").show();
//	alert("working");
//});
var usedQuotes = [];
var quoteIndex;
var correctAnswers = 0;
var quoteAnswerKey = [605, 765, 35, 1845, 285, 585, 1545, 45, 775, 1125, 1765, 1665];

$(document).ready(function(){

  $('#startButton').click(function() {
    $("#startButtonContainer").hide();
    nextQuote();
  });  
  $('#pratchettButton').click(function(){
    pratchettSelected();
  });
  $('#adamsButton').click(function(){
    adamsSelected();
  });
  $('#nextButton').click(function(){
    if(usedQuotes.length < 12){
      nextQuote();
    }
    else theFinalAnswer();
  });
});


var getAQuote = function(){
  quoteIndex = Math.floor((Math.random() * 12));
  var theQuotes = 
  [
    "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.                                             ",
    "I love deadlines. I like the whooshing sound they make as they fly by.                                                                                                  ",
    "Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life.                                                         ",
    "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.       ",
    "Light thinks it travels faster than anything but it is wrong. No matter how fast light travels, it finds the darkness has always got there first, and is waiting for it.",
    "Time is an illusion. Lunchtime doubly so.                                                                                                                               ",
    "They say a little knowledge is a dangerous thing, but it's not one half so bad as a lot of ignorance.                                                                   ",
    "It is a mistake to think you can solve any major problems just with potatoes.                                                                                           ",
    "Five exclamation marks, the sure sign of an insane mind.                                                                                                                ",
    "For a moment, nothing happened. Then, after a second or so, nothing continued to happen.                                                                                ",
    "Everything starts somewhere, although many physicists disagree.                                                                                                         ",
    "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.                                             "
  ];
  while(usedQuotes.indexOf(quoteIndex) > -1)
  {
    quoteIndex = Math.floor((Math.random() * 12));
  }
  usedQuotes = usedQuotes.concat(quoteIndex);
  return theQuotes[quoteIndex];

};

var theAnswerToLifeTheUniverseAndEverything = function(theQuestion){
  debugger;
  var theAnswer = Math.floor(Math.abs((2*(Math.sin((theQuestion*Math.PI)/360))*(Math.cos((theQuestion*Math.PI)/360))) * 60));
  debugger;
  return theAnswer;
}

var pratchettSelected = function(){
  var theAnswer = theAnswerToLifeTheUniverseAndEverything(quoteAnswerKey[quoteIndex]);
  if(theAnswer != 42){
    showCorrect();
    correctAnswers += 1;
  }
  else
  {
    showWrong();
  }
}

var adamsSelected = function(){
  var theAnswer = theAnswerToLifeTheUniverseAndEverything(quoteAnswerKey[quoteIndex]);
  if(theAnswer == 42){
    showCorrect();
    correctAnswers += 1;
  }
  else{
    showWrong();
  }
}

var showCorrect = function(){
  $("#theQuiz").hide();
  $("#buttonArea").hide();
  $("#correctArea").show();
  $("#nextButtonArea").show();
}

var showWrong = function(){
  $('#theQuiz').hide();
  $("#buttonArea").hide();
  $("#wrongArea").show();
  $("#nextButtonArea").show();
}

var nextQuote = function(){
  var newQuote = getAQuote();
  $("#theActualQuote").text(newQuote);
  $("#correctArea").hide();
  $("#wrongArea").hide();
  $("#nextButtonArea").hide();
   $("#theQuiz").slideDown("slow");
   $("#buttonArea").show();
}

var theFinalAnswer = function(){
  $("#correctArea").hide();
  $("#wrongArea").hide();
  $("#nextButtonArea").hide();
  $("#theQuiz").hide();
  $("#yourScore").text(correctAnswers);
  $("#yourScoreBox").show();

}