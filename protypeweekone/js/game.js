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
ball.vx = 0;
ball.vy = 0;

paddle = new Player()
paddle.width = 20
paddle.height = 100
paddle.x = paddle.width / 2
paddle.y = canvas.height / 2

timer = setInterval(animate, interval);


function animate() {
    // clear screen
    context.clearRect(0, 0, canvas.width, canvas.height)

    //Sets up boundary for counter
    if (counter == 2) {

        ball.move();
        if (ball.x > canvas.width + ball.width / 2) {
            ball.x = -ball.width / 2;
            counter += 1;

        }

        if (ball.x > canvas.width - ball.width / 2) {
            ball.vx = -ball.vx;
            counter += 1;
        }
        if (ball.x < ball.width / 2) {
            ball.vx = -(ball.vx);
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

    }
    //handles paddle movement
    if (s) {
        console.log("Moving down");
        paddle.y += 2;
    }
    if (w) {
        console.log("Moving up");
        padddle.y += -2;
    }
    ball.draw();
    ball.counter();
    console.log(paddle)
    paddle.drawrec()
}