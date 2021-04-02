function Player()
{
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    this.width = 100;
    this.height = 100;

    this.vx = 0;
    this.vy = 0;

    this.color = "#ff0100";
    this.draw = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.translate(this.x,this.y);
            context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
        context.restore();
    }
    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}