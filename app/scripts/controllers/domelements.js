'use strict';

/**
 * @ngdoc function
 * @name simApp.controller:DomelementsCtrl
 * @description
 * # DomelementsCtrl
 * Controller of the simApp
 */
angular.module('Sim')
  .controller('DomelementsCtrl', function ($scope) {
     var stage;

  	function init() {
 		stage = new createjs.Stage('myCanvas');
 		setUpTicker();
 		createDOMElement()
 	}

 	/**
 	 * Create a game over text in the middle of the canvas
 	 * @return {[type]} [description]
 	 */
 	function createDOMElement() {
 		var el = new createjs.DOMElement(instructions);
 		el.alpha = 0;
 		el.regX = 200;
 		el.x = stage.canvas.width / 2;
 		stage.addChild(el);

 		createjs.Tween.get(el).wait(1000).to({y:40,alpha:1},2000,createjs.Ease.quadOut);
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
