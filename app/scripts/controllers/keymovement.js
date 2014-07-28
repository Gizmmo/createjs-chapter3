'use strict';

/**
 * @ngdoc function
 * @name simApp.controller:KeymovementCtrl
 * @description
 * # KeymovementCtrl
 * Controller of the simApp
 */
angular.module('Sim')
  .controller('KeymovementCtrl', function ($scope) {
    var ARROW_KEY_LEFT = 37;
    var ARROW_KEY_RIGHT = 39;

    var stage, padel;
    var leftKeyDown, rightKeyDown = false;

    /**
     * Called when the sceen is made, creates a ticker and stage, then calls the startGame method
     * @return {[type]} [description]
     */
    function init () {
    	stage = new createjs.Stage('myCanvas');
    	createjs.Ticker.addEventListener('tick', tick);
    	createjs.Ticker.setFPS(60);
    	startGame();
    }

    /**
     * This function will actually make the padel and set up fucntion calls for keys downs and ups
     * @return {[type]} [description]
     */
    function startGame() {
    	padel = new createjs.Shape();
    	padel.width = 100;
    	padel.height = 20;

    	padel.graphics.beginFill('#0000FF').drawRect(0, 0, padel.width, padel.height);
    	padel.x = padel.nextX = 0;
    	padel.y = stage.canvas.height - padel.height;
    	stage.addChild(padel);

    	//handles keys presses and releases
    	window.onkeydown = movePadel;
    	window.onkeyup = stopPadel;
    }

    /**
     * When using keyboard, we use flags to update movement for the update method
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    function movePadel (e) {
    	e = !e ? window.event : e;
    	switch (e.keyCode) {
    		case ARROW_KEY_LEFT:
	    		leftKeyDown = true;
	    		break;
    		case ARROW_KEY_RIGHT:
    			rightKeyDown = true;
    			break;
    	}
    }

    /**
     * Stopping will make the movement flags false, which then stops the Padel in the update method
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    function stopPadel(e) {
    	e = !e ? window.event : e;
    	switch (e.keyCode) {
    		case ARROW_KEY_LEFT:
	    		leftKeyDown = false;
	    		break;
    		case ARROW_KEY_RIGHT:
    			rightKeyDown = false;
    			break;
    	}
    }

    /**
     * This function is called every frame tick and controls padel movement.  In an actual program, it would
     * have its own function called by update
     * @return {[type]} [description]
     */
    function update () {
    	var nextX = padel.x;
    	if (leftKeyDown) {
    		nextX = padel.x - 10; //Moves the padel to the left
    		if(nextX < 0) { //Stops the padel from going off the left side of the screen
    			nextX = 0;
    		}
    	}
    	else if (rightKeyDown) {
    		nextX = padel.x + 10; //Moves the Padel right
    		if(nextX > stage.canvas.width - padel.width) { //Stops the padel from going off the right side of the screen
    			nextX = stage.canvas.width - padel.width;
    		}
    	}
    	padel.nextX = nextX; //Updates the variable to control movement in the render method
    }

    /**
     * This function controls actually updating the padels x coords
     * @return {[type]} [description]
     */
    function render () {
    	padel.x = padel.nextX;  //Actually updates the x value of the padel to be updated on screen
    }

    /**
     * Called every frame
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    function tick(e) {
    	update();
    	render();
    	stage.update();
    }

    init();
  });
