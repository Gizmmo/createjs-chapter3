'use strict';

/**
 * @ngdoc function
 * @name simApp.controller:TextCtrl
 * @description
 * # TextCtrl
 * Controller of the simApp
 */
angular.module('Sim')
  .controller('TextCtrl', function ($scope) {
    var stage;

  	function init() {
 		stage = new createjs.Stage('myCanvas');
 		setUpTicker();
 		createText()
 	}

 	/**
 	 * Create a game over text in the middle of the canvas
 	 * @return {[type]} [description]
 	 */
 	function createText() {
 		var txt = new createjs.Text("Game Over", "20px Arial", "#FF7700");
 		txt.textBaseline = "middle";
 		txt.textAlign = "center";
 		txt.x = stage.canvas.width / 2;
 		txt.y = stage.canvas.height / 2;

 		stage.addChild(txt);
 		stage.update();
 	}

 	/**
	  * This function sets up your ticker for the game
	  */
	  function setUpTicker() {
	  	createjs.Ticker.setFPS(60);
	  	createjs.Ticker.addEventListener('tick', updateLoop);
	  }

	/**
	 * This function is the loop that runs trhough the game
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	 function updateLoop(e) {
	 	if(!e.paused){
	 		stage.update();
	 	}
	 }

  	init();
    });
