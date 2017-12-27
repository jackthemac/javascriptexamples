window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.links.length; i++) {
		var linkObj = document.links[i];
		if (linkObj.className) {
			var imgObj = document.getElementById(linkObj.className);
			if (imgObj) {
				setupRollover(linkObj,imgObj);
			}
		}
	}
}

function setupRollover(theLink,textImage) {
	theLink.imgToChange = textImage;
	theLink.onmouseout = function() {
		this.imgToChange.src = this.outImage.src;
	}
	theLink.onmouseover = function() {
		this.imgToChange.src = this.overImage.src;
	}
	
	theLink.outImage = new Image();
	theLink.outImage.src = textImage.src;

	theLink.overImage = new Image();
	theLink.overImage.src = "images/" + theLink.id + "Text.gif";
}
