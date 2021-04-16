var canvas ;
var context ; 
var timer ;
var interval = 1000/60;
var player ;
canvas = document.getElementById("canvas");
    context = canvas.getContext("2d")
    pad = new Player();
    timer = setInterval(paddle,interval);
    function paddle()
    {
        
        pad.drawrec();    
    }