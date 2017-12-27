window.onload = initLinks;

var thePic = 0;
var myPix = new Array("images/robot1.jpg","images/robot2.jpg","images/robot3.jpg");

function initLinks() {
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() {
	if (thePic == 0) {
		thePic = myPix.length;
	}
	thePic--;
	document.getElementById("myPicture").src = myPix[thePic];
	return false;
}

function processNext() {
	thePic++;
	if (thePic == myPix.length) {
		thePic = 0;
	}
	document.getElementById("myPicture").src = myPix[thePic];
	return false;
}
