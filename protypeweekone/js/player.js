function Player()
{
    
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    this.width = 100;
    this.height = 100;

    this.vx = 0;
    this.vy = 0;

    this.color = "#ff0100";
    this.drawrec = function()
    {
    context.fillstyle = this.color 
    context.fillRect(10,350, 30,90)
    }
    this.draw = function()
    {
        context.save();
           context.fillStyle = this.color;
           context.beginPath(); 
           context.arc(this.x,this.y,40, 0,2 * Math.PI)
           context.stroke()
           context.fill() 
         
           
        context.restore();
    }
    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
this.counter =function()
{
    context.save();
    
    context.font = "30px Arial"
    context.fillStyle = "black"
    context.fillText("Score: " + counter.toString(), canvas.width - 150, 30);
    context.restore();
}
}