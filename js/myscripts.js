//$("#startButton").on('click',function(){
	//$("#welcomeText").hide();
	//$(".theQuiz").show();
	//$("#quoteOne").show();
//	alert("working");
//});

$(document).ready(function(){

  $('#startButton').click(function() {
    $("#startButtonContainer").hide();
    $("#theQuiz").slideDown("slow");
  });  
  $('#pratchettButton').click(function(){
    $("#theQuiz").hide();
    $("#correctArea").show();
  });
  $('#adamsButton').click(function(){
    $('#theQuiz').hide();
    $("#wrongArea").show();
  });
  $('#nextButton').click(function(){
    $("#correctArea").hide();
    $("#wrongArea").hide();
    $("#theQuiz").slideDown("slow");
  });
  $("#nextButton2").click(function(){
    $("#correctArea").hide();
    $("#wrongArea").hide();
    $("#theQuiz").slideDown("slow");
  });
});