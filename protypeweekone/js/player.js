function Player() {

    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.width = 230;
    this.height = 240;

    this.vx = 0;
    this.vy = 0;

    this.color = "#ff0100";
     

    this.drawrec = function () {
        context.save();
       // context.translate(this.x, this.y)
       // console.log("Working")
        context.fillStyle = this.color
        context.fillRect(this.x,this.height, 250, 40)
        context.restore();
    }
  /*  this.drawrec2 = function () {
        context.save();
        context.translate(this.x, this.y)
       // console.log("Working")
        context.fillStyle = this.color
        context.fillRect((-this.width/2), (-this.height/2), this.width, this.height)
        context.restore();
    }*/
    this.drawline=function(obj)
    {
        context.save();
        context.strokeStyle = context.color;
        context.moveTo (obj.width + 130,obj.height);
        context.lineTo (this.x,this.y);
        context.closePath();
        context.linewidth = 2
        context.stroke();
        context.restore();
    }
    this.draw = function () {
        context.save();
        //context.translate(this.x,this.y)
        context.fillStyle = this.color;
        context.beginPath();
        //context.arc(0, 0, this.height, 0, 2 * Math.PI)
       context.arc(this.x,this.y,40,0,2 *Math.PI)
        context.stroke()
       context.fill()


        context.restore();
    }
    this.move = function () {
        this.x += this.vx;
        this.y += this.vy;
    }
   /* this.counter = function () {
        context.save();

        context.font = "30px Arial"
        context.fillStyle = "black"
        context.fillText("Player One's Score: " + p1soc.toString(), canvas.width - 1000, 30);
        context.fillText("Player Two's Score: " + p2soc.toString(), canvas.width - 1000, 60);
        context.restore();
    }*/
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
            this.top() < obj.top() &&
            this.bott() > obj.bott()
         ) {
            return true;
        }
        return false;
    }
    
   
    
}