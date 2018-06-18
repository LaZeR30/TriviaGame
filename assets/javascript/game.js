$(document).ready(function() {

var iNumCorrect = 0 ; var iNumWrong = 0;  var iNumUnanswered = 0 ; 
var timeLeft;	var timerId;

var oGame = {

	// create a countdown timer and display it   
	setCount: function() {
		timeLeft = 13;	timerId = setInterval(countdown, 1000);

		function countdown() {
			if (timeLeft == 0) {
				clearTimeout(timerId);
				clearInterval(timerId);
				alert("SORRY TIME's UP!");
				oGame.checkScore() ;
			} 
			else {
				$("#countdown").html(timeLeft + " seconds remaining...") ;  
				timeLeft--;
				// clearinterval 
			}
		}	
	} ,	// end timer

	// initialize game and re-set previous game
    play: function() {
		$("#myImage").hide();  $("#btnStart").hide();  $("#score").hide() ;
		$("#countdown").show();  $("#myForm").show();   $("#btnDone").show() ;
		iNumCorrect = 0 ; iNumWrong = 0;  iNumUnanswered = 0 ; 

		$("input:radio").each(function() {
			$(this).prop("checked", false) ;																																																																																																		
		}); // end each loop

		oGame.setCount() ;

	} , // end function play
	  
	checkScore: function() {
			
		$("input:radio").each(function() {
			
			if ($(this).prop("checked")) {
				
				if ( $(this).attr("value") == "winner" ){
					iNumCorrect += 1;
					console.log("in winner=", $(this).attr("name"), "value=", $(this).attr("value"), "iNumCorrect=", iNumCorrect );
				}
				
				if ( $(this).attr("value") == "wrong" ){
					iNumWrong += 1;
					console.log("in loser=", $(this).attr("name"), "value=", $(this).attr("value"), "iNumWrong=", iNumWrong  );	
				}
			} // end if 
																																																																																																											
		}); // end each loop

		iNumUnanswered = 4 - (iNumCorrect + iNumWrong) ;

		console.log("iNumCorrect=", iNumCorrect, "iNumWrong=", iNumWrong, "# Unanswered: ", iNumUnanswered) ;

		clearInterval(timerId);

		$("#numCorrect").html("# Correct: " + iNumCorrect);  $("#numWrong").html("# Incorrect: " + iNumWrong);  $("#numUnswered").html("# Unanswered: " + iNumUnanswered);
		$("#countdown").hide(); $("#myForm").hide(); $("#btnDone").hide() ;
		$("#score").show() ;  $("#btnStart").show();  $("#myImage").show();

	} , // end function CheckScore

} ; // end oGame 

// MAIN CONTROL
	$("#countdown").hide(); $("#myForm").hide(); $("#btnDone").hide() ; $("#score").hide() ;

   	$("#btnStart").on("click", function() {
		oGame.play() ;
 	}); 

	$("#btnDone").on("click", function() {
		oGame.checkScore() ;
	}); 
	 
}); // end doc ready

