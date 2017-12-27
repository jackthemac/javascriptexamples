window.addEventListener("load",initAdvert,false);

function initAdvert() {
	var adBox = "annoyingAdvert";
	
	document.getElementById(adBox).style.display = "block";
	document.getElementById("closeBox").addEventListener(
		"click",
		function() {
			document.getElementById(adBox).style.display = "none";	
		},
		false
	);
}
