var usedQuotes = []; // keeps track of which quotes have been shown
var quoteIndex; // contains the current quote
var correctAnswers = 0; // keeps track of how many correct answers.
var quoteAnswerKey = [605, 765, 35, 1845, 285, 585, 1545, 45, 775, 1125, 1765, 1665]; // Crazy answer key

$(document).ready(function(){ // ready to roll

  $('#startButton').click(function() { // start button 
    $("#startButtonContainer").hide(); // hide the button
    nextQuote(); // get the first quote
  });  
  $('#pratchettButton').click(function(){
    pratchettSelected(); // user selected Pratchett
  });
  $('#adamsButton').click(function(){
    adamsSelected(); // user selected Adams
  });
  $('#nextButton').click(function(){
    if(usedQuotes.length < 12){ // if there are still quotes left,
      nextQuote(); // grab the next one
    }
    else theFinalAnswer(); // no quotes left, show the score
  });
});


var getAQuote = function(){ // function to generate a quote and a quote index
  quoteIndex = Math.floor((Math.random() * 12)); // random number, 0 through 11
  var theQuotes = // array containing 12 quotes in a random order
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
  while(usedQuotes.indexOf(quoteIndex) > -1) // if the random number has already been used
  {
    quoteIndex = Math.floor((Math.random() * 12)); // try again
  }
  usedQuotes = usedQuotes.concat(quoteIndex); // found a new number, add it to the list
  return theQuotes[quoteIndex]; // return the new quote text

};

var theAnswerToLifeTheUniverseAndEverything = function(theQuestion){ // secret formula decoder
  var theAnswer = Math.floor(Math.abs((2*(Math.sin((theQuestion*Math.PI)/360))*(Math.cos((theQuestion*Math.PI)/360))) * 60)); // what?!?!
  return theAnswer; // give it back
}

var pratchettSelected = function(){ // user clicked Pratchett
  var theAnswer = theAnswerToLifeTheUniverseAndEverything(quoteAnswerKey[quoteIndex]); // decode the quote index
  if(theAnswer != 42){ // this is not an Adams quote
    showCorrect(); // so Pratchett is correct
    correctAnswers += 1; // give the user credit
  }
  else // this is an Adams quote
  {
    showWrong(); // tell them they suck
  }
}

var adamsSelected = function(){ // user selected Adams
  var theAnswer = theAnswerToLifeTheUniverseAndEverything(quoteAnswerKey[quoteIndex]); // decode the quote index
  if(theAnswer == 42){ // the great answer
    showCorrect(); // so Adams is correct
    correctAnswers += 1; // give the user credit
  }
  else{ // this is a Pratchett quote
    showWrong(); // tell them they suck
  }
}

var showCorrect = function(){ // tell them they're correct
  $("#theQuiz").hide();
  $("#buttonArea").hide();
  $("#correctArea").show();
  $("#nextButtonArea").show();
}

var showWrong = function(){ // tell them they suck
  $('#theQuiz').hide();
  $("#buttonArea").hide();
  $("#wrongArea").show();
  $("#nextButtonArea").show();
}

var nextQuote = function(){ // gets the next quote
  var newQuote = getAQuote(); // get the quote
  $("#theActualQuote").text(newQuote); // change out the text
  $("#correctArea").hide();
  $("#wrongArea").hide();
  $("#nextButtonArea").hide();
   $("#theQuiz").slideDown("slow"); // show it
   $("#buttonArea").show();
}

var theFinalAnswer = function(){ // gives the final score
  $("#correctArea").hide();
  $("#wrongArea").hide();
  $("#nextButtonArea").hide();
  $("#theQuiz").hide();
  $("#yourScore").text(correctAnswers); // change out the value
  $("#yourScoreBox").show(); // show it
}