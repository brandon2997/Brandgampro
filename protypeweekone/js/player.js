function Player() {

    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.width = 250;
    this.height = 40;
    this.radius = this.width/2

    this.vx = 0;
    this.vy = 0;
    this.ay = 1;
    this.color = "#ff0100";
     

    this.drawrec = function () {
        context.save();
     context.translate(this.x, this.y)
       // console.log("Working")
        context.fillStyle = this.color
        context.fillRect(-this.width/2,0, this.width, this.height)
        context.restore();
    }

    this.drawline=function(obj)
    {
        context.save();
        context.strokeStyle = context.color;
        context.moveTo (obj.x,obj.y);
        context.lineTo (this.x,this.y);
        context.closePath();
        context.linewidth = 2
        context.stroke();
        context.restore();
    }
    this.drawCircle = function () {
        context.save();
        context.translate(this.x,this.y)
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(0, 0, this.radius, 0, 2 * Math.PI)
       //context.arc(this.x,this.y,40,0,2 *Math.PI)
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
        context.fillText("Number of bounces " + Bounce.toString(), canvas.width - 1000, 30);
        context.restore();
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