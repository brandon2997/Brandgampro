var canvas ;
var context ; 
var timer ;
var interval = 1000/60;
var player ;
var counter = 0;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d")
    player = new Player();
    player.vx = 0;
    player.vy = 0;
    
   // timer = setInterval(animate,interval);



    /*function animate()
    {
        if(counter == 2){
        context.clearRect(0,0,canvas.width,canvas.height);
        player.move();
        if (player.x > canvas.width + player.width/2)
        {
            player.x = -player.width/2;
            counter +=1 ;
            
        }
        
        if(player.x > canvas.width - player.width/2)
	{
		player.vx = -player.vx;
        counter +=1 ;	
	}
    if(player.x < player.width/2)
	{
		player.vx = -(player.vx )  ;
        counter  += 1 ;	
	}
    if (player.y < player.height/2)
    {
        player.vy = -(player.vy );
        counter  +=1 ;
    }
	
     if (player.y > canvas.height - player.height/2)
   {
        player.vy = -(player.vy );
        counter  +=1 ;
        
    }
}
        player.draw();
        player.counter();
       
    }*/
