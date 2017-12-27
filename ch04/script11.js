window.onload = choosePic;

var theAd = 0;
var adImages = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");

function choosePic() {
	theAd = Math.floor(Math.random() * adImages.length);
	document.getElementById("adBanner").src = adImages[theAd];
	
	rotate();
}

function rotate() {
	theAd++;
	if (theAd == adImages.length) {
		theAd = 0;
	}
	document.getElementById("adBanner").src = adImages[theAd];

	setTimeout(rotate, 3 * 1000);
}
