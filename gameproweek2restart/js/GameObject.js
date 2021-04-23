// JavaScript Document
function GameObject(x,y,w,h,color)
{
	
	
	this.height = 100
	this.width = 100
	this.x = canvas.width/2;
	this.y = canvas.height/2
	
	
	
	this.vx = 0;
	this.vy = 0;
	

	
	
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width), (-this.height), 30, 90);
		context.restore();
		
	}	
	

	
	
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}

	
}
