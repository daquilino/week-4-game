/*  Douglas Aquilino       February 11, 2017   */
/*  RCB - "Crystals Collector" Homework #4     */
/*                game.js                      */


// Global Variable Declarations

// game object.  Contains all game variables and methods.
var game = {

// game properties
	
	wins: 0,
	losses: 0,
	score: 0,
	scoreToBeat: 0,
	
	
// game methods
	
	//Calls randomize(). Sets score to 0.
	resetGame : function(){
		this.randomize();
		this.score = 0;
	},//END restGame

	// Increments wins, displays game stats,
	// displays win messege, and resets game.
	winAlert : function(){		
		this.wins++;
		this.display();
		
		$("#winMessege").css("visibility", "visible");
		setTimeout(function() {
			$("#winMessege").css("visibility", "hidden");
		}, 1500);
		
		this.resetGame();

	},//END winAlert
	
	// Increments losses, displays game stats,
	// displays lose messege, and resets game.
	loseAlert : function()
	{
		this.losses++;
		this.display();
		
		$("#loseMessege").css("visibility", "visible");
		setTimeout(function() {
			$("#loseMessege").css("visibility", "hidden");
		}, 1500);
		
		this.resetGame();		
	
	},//END loseAlert
		
	//Randomizes match score and gem points.
	randomize : function()
	{
		this.scoreToBeat = Math.floor((Math.random()*(120-19))+19);
		
		for (var i = 1; i < 5; i++)
		{
			var element = "#gem" + i;
			$(element).attr("points", Math.floor((Math.random()*12)+1));	
		}
	
	},//END randomize
	
	//Adds points from clicked gem to score.  Displays stats.
	addToScore : function(x)
	{
		this.score += parseInt($(x).attr("points"));
		this.display();
	
	},//END addScore
	
	//Compares score to match score. If equal calls winAlert().
	//If greater than calls loseAlert() 
	compare : function(x)
	{
		this.addToScore(x);
		if (this.score == this.scoreToBeat)
		{
			this.winAlert();
		}
		else if (this.score > this.scoreToBeat)
		{
			this.loseAlert();
		}
				
	},//END compare

	//Displays stats of game to user using jQuery.
	display : function()
	{

		$("#wins").text(this.wins);
		$("#match").text(this.scoreToBeat);
		$("#losses").text(this.losses);
		$("#score").text(this.score);
	},

	//Initializes game.
	start : function()
	{
		this.resetGame();
		this.display();
	}

};//END game object

//Waits until document (page) loads. Then runs code.
$(document).ready(function()
{ 	
	game.start();
	
	// Event Hander For Gems
	$(".gem").on("click", function()
	{	
		game.compare(this);	
		game.display();
	
	});//END $(".gem").on("click", function()


	// When "Show Instructions" button clicked. Instructions display.
	$("#show").on("click",function()
	{
		$("#instructions-col").slideDown(1000);	//1000 milisecond delay
	});

	//When "Hide Instructions" button clicked. Instructions hide.
	$("#hide").on("click",function()
	{
		$("#instructions-col").slideUp(1000);	//1000 milisecond delay
	});

});//END $(document).ready