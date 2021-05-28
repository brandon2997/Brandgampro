var canvas;
var context;
var timer;
var interval = 60/1000;
var block;
var check = 0
var counter = 0
var fiction = .67;

canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
    block = new Player
    block.x = canvas.width - 400 
    block.y = canvas.height - 75
    block.height = 100
    block.width = 100 
    block2 = []
    for(var i = 0; i < 5 ; i++)
    {
    block2[i] = new Player
    block2[i].x = rand(1,700)
    block2[i].y = canvas.height - rand(900,1500)
    block2[i].height = 25
    block2[i].width = 25 
    block2[i].vy = rand(3,5) *fiction
    block2[i].color = "green"
    }   
    cir = []
    for(var i = 0; i < 5 ; i++)
    {
    cir[i] = new Player
    cir[i].x =  rand(1,700)
    cir[i].y = canvas.height - rand(900,1500)
    cir[i].height = 25
    cir[i].width = 25 
    cir[i].radius = 15
    cir[i].vy = rand(2,5) * fiction
    cir[i].color = "yellow"
    }
    timer = setInterval(animate, interval)
    function animate() 
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        if (a)
        {
          block.x += -5  
        }
        if (d)
        {
          block.x += 5
        }
        block.drawrect();
        block.counter();
        for(var i = 0; i < 5 ; i++)
        {
        block2[i].drawrect();
        block2[i].move(); 
        cir[i].drawcircle();
        cir[i].move();
        }
       
        
    if (check == 0)
    {
        var i = 0
        for ( i = 0; i < 5 ; i++)
        {        
            if (block2[i].y > canvas.height)
            {
                block2[i].y = canvas.height - rand(900,1500);
                block2[i].x = rand(1,700)
                       
            }
        }
        for ( i = 0; i < 5 ; i++)
        {
            if(block.hitTestObject(block2[i]))
            {
                block2[i].y = canvas.height - rand(900,1500);
                block2[i].x = rand(1,700)
                counter++;
            }
        }        
        for ( i = 0; i < 5 ; i++)
        {        
            if (cir[i].y > canvas.height)
            {
                cir[i].y = canvas.height - rand(900,1500);
                cir[i].x = rand(1,700)
                       
            }
        }
        for ( i = 0; i < 5 ; i++)
        {
            if(block.hitTestObject(cir[i]))
            {
                cir[0].y = canvas.height - rand(900,1500);
                cir[0].x = rand(1,700)
                cir[1].y = canvas.height - rand(900,1500);
                cir[1].x = rand(1,700)
                cir[2].y = canvas.height - rand(900,1500);
                cir[2].x = rand(1,700)
                cir[3].y = canvas.height - rand(900,1500);
                cir[3].x = rand(1,700)
                cir[4].y = canvas.height - rand(900,1500);
                cir[4].x = rand(1,700)
                block2[0].y = canvas.height - rand(900,1500);
                block2[0].x = rand(1,700)
                block2[1].y = canvas.height - rand(900,1500);
                block2[1].x = rand(1,700)
                block2[2].y = canvas.height - rand(900,1500);
                block2[2].x = rand(1,700)
                block2[3].y = canvas.height - rand(900,1500);
                block2[3].x = rand(1,700)
                block2[4].y = canvas.height - rand(900,1500);
                block2[4].x = rand(1,700)
                counter = 0;
            }
        }  
        if (i >= 5 )
            {
             i = 0;   
            } 
    }
 }