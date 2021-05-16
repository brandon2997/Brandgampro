
var canvas;
var context;
var timer;
var interval;
var Player;
var pellet
var check = 0
    canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

    Player = new player();
    Player.x = canvas.width/2
    Player.y = canvas.height/2
    Player.height = 100
    Player.width = 100 
    function animate()
    {
        Player.drawrect();

    }
