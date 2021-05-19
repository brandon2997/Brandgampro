
var canvas;
var context;
var timer;
var interval = 60/1000;
var Player;
var ball;
var pellet = 0;
var check = 0;
    canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

    ball = new Player();
    
    ball.vx = 5;
    ball.vy = 0;
    ball.width = 80
    ball.height = 80
    ball.radius = 40

    Player = new Player();
    Player.x = canvas.width/2
    Player.y = canvas.height/2
    Player.height = 100
    Player.width = 100 

    timer = setInterval(animate, interval)
    function animate()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (w)
        {
          Player.y += -5  
        }
        if (s)
        {
            Player.y += 5
        }
        if (a)
        {
          Player.x += -5  
        }
        if (d)
        {
          Player.x += 5
        }
        
        if (space && pellet == 0) 
        { 
          pellet = 180
          ball.vx = 0
          ball.x = Player.x
          ball.y = Player.y
        } 
        if (pellet >= 1)
        {
          ball.vx = 5 
          
          ball.drawcircle();
          ball.move();
          pellet -=1;
          console.log("pellet");
        }
        Player.drawrect();
     



    }
