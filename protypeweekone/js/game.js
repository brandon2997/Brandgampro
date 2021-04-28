var canvas;
var context;
var timer;
var interval = 1000 / 60;
var ball;
var paddle;
var counter = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d")
ball = new Player();
ball.vx = 10;
ball.vy = 10;

paddle = new Player()
paddle.width = 20
paddle.height = 100
paddle.x = paddle.width / 2 + 10
paddle.y = canvas.height / 2

timer = setInterval(animate, interval);



function hitTestObject(ball, paddle) {
    console.log("workin")
    if (paddle.left() < ball.right() &&
        paddle.right() > ball.left() &&
        paddle.top() < ball.bott() &&
        paddle.bott() > ball.top()) {
        return true;
    }
    return false;
}


function animate() {
    // clear screen
    context.clearRect(0, 0, canvas.width, canvas.height)

    //Sets up boundary for counter

    if (hitTestObject(ball, paddle)) {
        ball.vx = -ball.vx
        ball.vy = -ball.vy
        
    }


    /*if (ball.x > canvas.width + ball.width / 2) {
        ball.x = -ball.width / 2;
        counter += 1;

    }
if (ball.x < ball.width / 2) {
        ball.vx = -(ball.vx);
        counter += 1;
    }
    */

    if (ball.x > canvas.width - ball.width / 2) {
        ball.vx = -ball.vx;
        counter += 1;
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

    if (paddle.y < canvas.height - paddle.height / 2) {
        if (s) {
            console.log("Moving down");
            paddle.y += 10;
        }


        else if (paddle.y > canvas.height - paddle.height / 2) {
            paddle.y = 0;
        }
    }
    if (paddle.y > paddle.height / 2) {
        if (w) {
            console.log("Moving up");
            paddle.y += -10;
        }


        else if (paddle.y < paddle.height / 2) {
            paddle.y = 0;
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
    //console.log(paddle)
    paddle.drawrec()
}