

var canvas;
var context;
var timer;

var interval = 1000/60;
var player;

	
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	
	player = new GameObject();

	
	timer = setInterval(animate, interval);

function animate()
{


	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	

	
	if(d)
	{
		console.log("Moving Right");
		player.x += 2;
	}
	if(a)
	{
		console.log("Moving Left");
		player.x += -2;
	}
	if(s)
	{
		console.log("Moving down");
		player.y += 2;
	}
	if(w)
	{
		console.log("Moving up");
		player.y += -2;
	}
	
	player.drawRect();

}
