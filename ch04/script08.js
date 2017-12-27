window.onload = initBannerLink;

var theAd = 0;
var adURL = new Array("negrino.com","sun.com","microsoft.com");
var adImages = new Array("images/banner1.gif","images/banner2.gif","images/banner3.gif");


function initBannerLink() {
	if (document.getElementById("adBanner").parentNode.tagName == "A") {
		document.getElementById("adBanner").parentNode.onclick = newLocation;
	}
	
	rotate();
}

function newLocation() {
	document.location.href = "http://www." + adURL[theAd];
	return false;
}

function rotate() {
	theAd++;
	if (theAd == adImages.length) {
		theAd = 0;
	}
	document.getElementById("adBanner").src = adImages[theAd];

	setTimeout(rotate, 3 * 1000);
}
