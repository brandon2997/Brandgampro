var w = false;
var s = false;
var up = false;
var down = false;
document.addEventListener("keydown", press);
document.addEventListener("keyup", release)

function press(e) {

	if (e.keyCode == 87) {
		w = true;
		//console.log("working")
	}
	if (e.keyCode == 83) {
		s = true;
		//console.log("working")
	}
	if (e.keyCode == 68)
	{
		up = true;
		
	}
	if (e.keyCode == 65)
	{
		down = true;
	}
}

function release(e) {
	if (e.keyCode == 87) {
		w = false;
		//console.log("working")
	}
	if (e.keyCode == 83) {
		s = false;
		//console.log("working")
	}
	if (e.keyCode == 68)
	{
		up = false;
	}

	if (e.keyCode == 65)
	{
		down = false;
	}
}