var canvas;
var context;
var timer;
var interval = 1000 / 60;
var ball;
var paddle;
var counter = 0;
var fiction = .67;
var gravity = 1
var Bounce = 0
canvas = document.getElementById("canvas");
context = canvas.getContext("2d")
ball = new Player()
ball.vx = 0;
ball.vy = 5;
ball.width = 80
ball.height = 80
ball.radius = 40


paddle = new Player()

paddle.x = canvas.width / 2 
paddle.y = 550
//paddle2 = new Player()
//paddle2.width = 20
//paddle2.height = 100
//paddle2.x = canvas.width - paddle2.width
//paddle2.y = (canvas.height/2)

timer = setInterval(animate, interval);





function animate() {
    // clear screen
    context.clearRect(0, 0, canvas.width, canvas.height)
    ball.move()
    //Sets up boundary for counter

    if (paddle.hitTestObject(ball)) {
        ball.y = paddle.y - paddle.height/2 - ball.radius
       // ball.vx = -ball.vx
        ball.vy = -25
        Bounce += 1
        if(ball.x > paddle.x + paddle.width/3 ){
            ball.vx = 5
        }else if(ball.x < paddle.x - paddle.width/3){
            ball.vx = -5
        }else{
            ball.vx = 0
        }

        


    }

    if (paddle.x <  paddle.width / 2){
    

            paddle.x += 5;
        
        
    } 
     if (paddle.x  > canvas.width - paddle.width / 2 ) {
        paddle.x += -5
    
    }
    if (ball.x > canvas.width + ball.width / 2) {
        ball.x = -ball.width / 2;
        counter += 1;

    }


    if (ball.x < ball.radius) {
        ball.vx = 10;
        //Bounce += 1
    }


    if (ball.x > canvas.width - ball.radius) {
        ball.vx = -10;
    }
    if (ball.y < ball.height / 2) {
        ball.vy = -(ball.vy);
        
    }

 
   // if (ball.y <= paddle.height) {
     //   ball.vy = -(ball.vy)

       
    //}
  
    
    if (ball.y > canvas.height - ball.radius) {
        ball.y = canvas.height - ball.radius;
        ball.vy =  -(ball.vy) * fiction;
        //ball.vx =  -(ball.vx) * fiction
        Bounce = 0;

    }
if (down) {
    
            paddle.x += -5;
        }
   if (up) {

        paddle.x += 5;
   }
  //  if (down) {
//       paddle.x += -5;
 //   }
    ball.vy += gravity;
    
    ball.drawCircle();

    paddle.drawrec()

    ball.drawline(paddle)
    paddle.counter();

}