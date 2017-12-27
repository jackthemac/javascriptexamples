window.addEventListener("load",initAdvert,false);

function initAdvert() {
	var adBox = "annoyingAdvert";
	
	document.getElementById(adBox).style.display = "block";
	document.getElementById(adBox).addEventListener("mouseover",slide,false);
	document.getElementById("closeBox").addEventListener(
		"click",
		function() {
			document.getElementById(adBox).style.display = "none";	
		},
		false
	);
}

function slide() {
	var adBox = "annoyingAdvert";
	
	if (nextPos(adBox) <= (document.body.clientWidth-150)) {
		document.getElementById(adBox).style.left = nextPos(adBox) + "px";
		setTimeout(slide,100);
	}
	
	function nextPos(elem) {
		return document.getElementById(elem).offsetLeft+1;
	}
}
