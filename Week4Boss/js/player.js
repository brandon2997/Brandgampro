function Player()
{
    
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 100;
    this.height = 100;
    this.radius = this.width/2
    this.color = "#ff0000"
    this.vx = 5;
    this.vy = 0;
    

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
        context.arc(0, 0, this.radius, 0, 360 *Math.PI/180, true);
        context.closePath();
        context.fill();
    context.restore();
    }
    this.move = function()
    {
        this.x += this.vx;
		this.y += this.vy;
    }
    this.top = function()
    {
        return this.y - this.height/2
    } 
    this.bott = function()
    {
        return this.y + this.height/2
    } 
    this.left = function()
    {
        return this.x - this.width/2
    } 
    this.right = function()
    {
        return this.x + this.width/2
    } 
    this.hitTestObject= function(obj) {
   // console.log("still")
        if (
           this.right() > obj.left() && 
            this.left() < obj.right() && 
            this.top() < obj.bott() &&
            this.bott() > obj.top()
         ) {
            return true;
        }
        return false;
    }
}