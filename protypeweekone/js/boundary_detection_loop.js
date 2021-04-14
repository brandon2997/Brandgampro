var canvas ;
var context ; 
var timer ;
var interval = 1000/60;
var player ;


    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d")
    player = new Player();
    player.vx = 5;
    player.vy = 0;
    
    timer = setInterval(animate,interval);



    function animate()
    {
       // context.clearRect(0,0,canvas.width,canvas.height);
        //player.move();
       /* if (player.x > canvas.width + player.width/2)
        {
            player.x = -player.width/2;
        }
        
        if(player.x > canvas.width - player.width/2)
	{
		player.vx = -player.vx;	
	}
    if(player.x > canvas.width + player.width/2)
	{
		player.vx = -player.vx;	
	}
    */
        player.draw();
    }
