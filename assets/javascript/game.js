/*  Douglas Aquilino       February 11, 2017   */
/*  RCB - "Crystals Collector" Homework #4           */
/*                game.js                      */



// Global Variable Declarations

// game object 
var game = {

	// game properties
	wins: 0,
	losses: 0,
	score: 0,
	scoreToBeat: 0,
	
	
	// game methods
	resetGame : function(){
		this.randomize();
		this.score = 0;
	},//END restGame


	winAlert  : function(){		
		this.wins++;
		this.display();
		//alert("You Win");   //test code remove
		this.resetGame();

	},//END winAlert
	
	
	loseAlert : function(){
		this.losses++;
		this.display();
		console.log("YOU LOSE");		//test code remove
		alert("You Lose");				//test code remove
		this.resetGame();
		
	},//END loseAlert
		
	randomize : function(){
		this.scoreToBeat = Math.floor((Math.random()*120-19+1)+19);
		
		for (var i = 1; i < 5; i++){
			var element = "#gem" + i;
			$(element).attr("points", Math.floor((Math.random()*12)+1));	
		}
	},//END randomize
	
	addToScore  : function(x){

		this.score += parseInt($(x).attr("points"));
		this.display();
	},//END addScore
	
	
	compare   : function(x){
		this.addToScore(x);
		if (this.score == this.scoreToBeat){
			this.winAlert();
		}
		else if (this.score > this.scoreToBeat){
			this.loseAlert();
		}
				
	},//END compare

	display : function(){

		$("#wins").text(this.wins);
		$("#match").text(this.scoreToBeat);
		$("#losses").text(this.losses);
		$("#score").text(this.score);
	},

	start : function(){
		this.resetGame();
		this.display();
	}

};//END game object


$(document).ready(function(){ 
	
	game.start();
	
	// Event Hander For Gems
	$(".gem").on("click", function(){
		
		game.compare(this);	
		game.display();
	
	});//END $(".gem").on("click", function()



	// When "Show Instructions" button clicked. Instructions display.
	$("#show").on("click",function(){
		$("#instructions-col").slideDown(1000);	//1000 milisecond delay
	});

	//When "Hide Instructions" button clicked. Instructions hide.
	$("#hide").on("click",function(){
		$("#instructions-col").slideUp(1000);	//1000 milisecond delay
	});

});//END $(document).ready