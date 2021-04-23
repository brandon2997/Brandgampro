function Player() {

    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.width = 100;
    this.height = 100;

    this.vx = 0;
    this.vy = 0;

    this.color = "#ff0100";

    this.drawrec = function () {
        context.save();
        context.translate(this.x, this.y)
        console.log("Working")
        context.fillStyle = this.color
        context.fillRect((-this.width/2), (-this.height/2), this.width, this.height)
        context.restore();
    }
    this.draw = function () {
        context.save();
        context.translate(this.x,this.y)
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(0, 0, 40, 0, 2 * Math.PI)
        context.stroke()
        context.fill()


        context.restore();
    }
    this.move = function () {
        this.x += this.vx;
        this.y += this.vy;
    }
    this.counter = function () {
        context.save();

        context.font = "30px Arial"
        context.fillStyle = "black"
        context.fillText("Score: " + counter.toString(), canvas.width - 150, 30);
        context.restore();
    }
}