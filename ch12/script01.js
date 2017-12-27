window.addEventListener("load",initAll,false);

function initAll() {
	var allLinks = document.getElementsByTagName("a");
	
	for (var i=0; i<allLinks.length; i++) {
		if (allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].addEventListener("click",toggleMenu,false);
		}
	}
}

function toggleMenu(evt) {
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	var thisMenuName = this.href.substring(startMenu,stopMenu);

	var thisMenuStyle = document.getElementById(thisMenuName).style;
	if (thisMenuStyle.display == "block") {	
		thisMenuStyle.display = "none";
	}
	else {
		thisMenuStyle.display = "block";
	}

	evt.preventDefault();
}
