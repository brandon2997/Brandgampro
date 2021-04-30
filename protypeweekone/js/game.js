var canvas;
var context;
var timer;
var interval = 1000 / 60;
var ball;
var paddle;
var counter = 0;

p1soc = 0;
p2soc = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d")
ball = new Player();
ball.vx = 10;
ball.vy = 0;
ball.height = 20
ball.width = 20

paddle = new Player()
paddle.width = 20
paddle.height = 100
paddle.x = paddle.width / 2 + 10
paddle.y = canvas.height / 2 
paddle2 = new Player()
paddle2.width = 20
paddle2.height = 100
paddle2.x = canvas.width - paddle2.width
paddle2.y = (canvas.height/2)

timer = setInterval(animate, interval);





function animate() {
    // clear screen
    context.clearRect(0, 0, canvas.width, canvas.height)

    //Sets up boundary for counter
    
    if (paddle.hitTestObject(ball)) {
        
        ball.vx = -ball.vx
        ball.vy = -ball.vy
    
      /* if (ball.y < paddle.y - paddle.height/6)
        {
            ball.x = paddle.x + paddle.width/2
            console.log("w")
            ball.vx= 5
            ball.vy= -5

        }
        else if (ball.y < paddle.y + paddle.height/6)
        {
            ball.x = paddle.x + paddle.width/2
            console.log("l")
            ball.vx= 6
            ball.vy= 6
        }
        else if (ball.y < paddle.y)
        {
            ball.vx= 6
        }*/
    }

     if (paddle2.hitTestObject(ball)) {
        
         ball.vx *= -1
         ball.vy = ball.vy
     }


    /*if (ball.x > canvas.width + ball.width / 2) {
        ball.x = -ball.width / 2;
        counter += 1;

    }
    */

    if (ball.x < ball.width / 2 - 100) {
        ball.vx = -(ball.vx);
        ball.x = canvas.width/2
        ball.y = canvas.height/2
        p1soc += 1;
    }
    

    if (ball.x > canvas.width - ball.width / 2 + 100) {
        ball.vx = -ball.vx;
        ball.x = canvas.width/2
        ball.y = canvas.height/2
        p2soc += 1;
    }
    if (ball.y < ball.height / 2) {
        ball.vy = -(ball.vy);
        counter += 1;
    }

    if (ball.y > canvas.height - ball.height / 2) {
        ball.vy = -(ball.vy);
        counter += 1;

    }
    /* if (ball.y <= paddle.height )
     {
         ball.vy = -(ball.vy)
         
         counter += 1
     }*/

    if (paddle.y < canvas.height - paddle.height / 2) 
    {
        if (s) 
        {
            
            paddle.y += 10;
        }


        else if (paddle.y > canvas.height - paddle.height / 2) 
        {
            paddle.y = 0;
        }
    }
    if (paddle.y > paddle.height / 2) 
    {
        if (w) 
        {
            //console.log("Moving up");
            paddle.y += -10;
        }


        else if (paddle.y < paddle.height / 2) 
        {
            paddle.y = 0;
        }
    }
    if (paddle2.y < canvas.height - paddle2.height / 2) {
        if (down) 
        {
            paddle2.y += 10;
        }


        else if (paddle2.y > canvas.height - paddle2.height / 2)
        {
            paddle2.y = 0;
        }
    }
    if (paddle2.y > paddle2.height / 2) 
        {
        if (up) 
        {
            //console.log("Moving up");
            paddle2.y += -10;
        }


        else if (paddle2.y < paddle2.height / 2) 
        {
            paddle2.y = 0;
        }
    }
    ball.move()
    //handles paddle movement
    // if (s) {
    //   console.log("Moving down");
    // paddle.y += 2;
    //}
    //if (w) {
    //  console.log("Moving up");
    //paddle.y += -2;
    //}
    ball.draw();
    ball.counter();
   //console.log(paddle2)
    paddle.drawrec()
    paddle2.drawrec2()
    paddle.drawline()
    
}