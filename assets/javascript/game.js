/*  Douglas Aquilino       February 11, 2017   */
/*  RCB - "Crystals Collector" Homework #4           */
/*                game.js                      */


	// Global Variable Declarations







	// When "Show Instructions" button clicked. Instructions display.
	$("#show").on("click",function(){

		$("#instructions-col").slideDown(1000);	//1000 milisecond delay

	});


	//When "Hide Instructions" button clicked. Instructions hide.
	$("#hide").on("click",function(){

		$("#instructions-col").slideUp(1000);	//1000 milisecond delay

	});