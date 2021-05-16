function player()
{
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 100;
    this.height = 100;
    this.color = "#ff0000"

    this.drawrect =function()
    {
        context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		
    }
    this.drawcircle = function()
    {
        context.save();
        context.fillStyle = this.color;
        context.beginPath();
        context.translate(this.x, this.y);
        context.arc(0, 0, this.radius(), 0, 360 *Math.PI/180, true);
        context.closePath();
        context.fill();
    context.restore();
    }
    this.move = function()
    {
        this.x += this.vx;
		this.y += this.vy;
    }
}