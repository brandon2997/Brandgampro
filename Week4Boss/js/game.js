
var canvas;
var context;
var timer;
var interval = 60/1000;
var Player;
var ball;
var biggerche = 0
var growche = 0
var growtimer = 10
var smallerche = 0
var smallertimer = 10
var pellet = 0;
var check = 0;
var bombche = 0;
var bombtim = 180;
    canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

    ball = new Player();
    
    ball.vx = 5;
    ball.vy = 0;
    ball.width = 80
    ball.height = 80
    ball.radius = 40
powerup = new Player();
    powerup.x = 50
    powerup.y = 50
    powerup.width = 80
    powerup.height = 80
    powerup.radius = 40
powerup2 = new Player();
    powerup2.x = 50
    powerup2.y = 150
    powerup2.width = 80
    powerup2.height = 80
    powerup2.radius = 40
    powerup2.color = "black" 
powerup3 = new Player();
    powerup3.x = 50
    powerup3.y = 300
    powerup3.width = 80
    powerup3.height = 80
    powerup3.radius = 40
    powerup3.color = "blue"
powerup4 = new Player();
    powerup4.x = 50
    powerup4.y = 450
    powerup4.width = 80
    powerup4.height = 80
    powerup4.radius = 40
    powerup4.color = "Green"
Bomb = new Player();
    Bomb.x = 10000
    Bomb.y = 450
    Bomb.width = 80
    Bomb.height = 80
    Bomb.radius = 40
    Bomb.color = "Green"
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
        if (Player.hitTestObject(powerup))
        {
          powerup.x = 100000
          powerup.y = 100000
          biggerche = 1

        }
        if (Player.hitTestObject(powerup2))
        {
          powerup2.x = 100000
          powerup2.y = 100000
          smallerche = 1

        }
        if (Player.hitTestObject(powerup3))
        {
          powerup3.x = 100000
          powerup3.y = 100000
          growche = 1

        }
        if (Player.hitTestObject(powerup4))
        {
          powerup4.x = 100000
          powerup4.y = 100000
          bombche = 1

        }
        if (growche == 1 && growtimer > 0 )
        {
          Player.height += 5
          Player.width += 5
          growtimer += -1
        }
        if (smallerche == 1 && smallertimer > 0 )
        {
          Player.height += -5
          Player.width += -5
          smallertimer += -1
        }
        if (space && pellet == 0) 
        { 
          pellet = 180
          ball.vx = 0
          ball.x = Player.x
          ball.y = Player.y
          ball.radius = 40
        } 
        if (pellet >= 1)
        {
          ball.vx = 5 
          
          ball.drawcircle();
          ball.move();
          pellet -=1;
          console.log("pellet");
        
        }
        if (pellet >= 1 && biggerche == 1)
        {
          ball.vx = 5 
          
          ball.drawcircle();
          ball.move();
          pellet -=1;
          console.log("pellet");
          ball.radius += 1
        }
        if (bombche == 1 && shift)
        {
          
          Bomb.x = Player.x + 100 
          Bomb.y = Player.y
          
          
        }
        if (bombche == 1 && bombtim >= 0 && Bomb.y < 800 & Bomb.x < 1000 )
        {
          
         Bomb.radius += .3
          bombtim -= 1;
          
        }
        if(bombtim == -1)
        {
          bombtim = 180
          Bomb.radius = 40 
          Bomb.x = 10000 
          console.log(bombtim) 
        }
        Player.drawrect();
        powerup.drawcircle();
        powerup2.drawcircle();
        powerup3.drawcircle();
        powerup4.drawcircle();
        Bomb.drawcircle();



    }
