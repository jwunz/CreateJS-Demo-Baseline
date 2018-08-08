var stage = null;
var mousePosition = {x:0, y:0};

//Settings to be used throughout the program

var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

//Function for initializing the canvas

var setupCanvas = function() {
    var canvas = document.getElementById('game');
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;

    //The canvas will be our "stage" for our game "actors" to perform on

    stage = new createjs.Stage(canvas);
};

//Initialize the app

var init = function() {

    //Set up the canvas

    setupCanvas();

    
};

init();