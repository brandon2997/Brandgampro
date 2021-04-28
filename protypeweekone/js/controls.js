var w = false;
var s = false;

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
}