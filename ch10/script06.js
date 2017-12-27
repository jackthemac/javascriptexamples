window.addEventListener("load",initAll,false);

function initAll() {
	document.getElementById("theForm").addEventListener("submit",nodeChanger,false);
	chgNodes.init();
}

function nodeChanger(evt) {
	return chgNodes.doAction(evt);
}

var chgNodes = {
	actionType: function() {
		var radioButtonSet = document.getElementById("theForm").nodeAction;
		for (var i=0; i<radioButtonSet.length; i++) {
			if (radioButtonSet[i].checked) {
				return i;
			}
		}
		return -1;
	},

	allGrafs: function() {
		return this.nodeChgArea.getElementsByTagName("p");
	},
	
	pGrafCt: function() {
		return this.allGrafs().length;
	},
	
	inText: function() {
		return document.getElementById("textArea").value;
	},
	
	newText: function() {
		return document.createTextNode(this.inText());
	},
	
	grafChoice: function() {
		return document.getElementById("grafCount").selectedIndex;
	},
	
	newGraf: function() {
		var myNewGraf = document.createElement("p");
		myNewGraf.appendChild(this.newText());
		return myNewGraf;
	},
	
	oldGraf: function () {
		return this.allGrafs().item(this.grafChoice());
	},

	doAction: function(evt) {
		switch(this.actionType()) {
			case 0:
				this.nodeChgArea.appendChild(this.newGraf());
				break;
			case 1:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.removeChild(this.oldGraf());
					break;
				}
			case 2:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.insertBefore(this.newGraf(),this.oldGraf());
					break;
				}
			case 3:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.replaceChild(this.newGraf(),this.oldGraf());
					break;
				}
			default:
				alert("No valid action was chosen");
		}

		document.getElementById("grafCount").options.length = 0;

		for (var i=0; i<this.pGrafCt(); i++) {
			document.getElementById("grafCount").options[i] = new Option(i+1);
		}
		evt.preventDefault();
	},
	
	init: function() {
		this.nodeChgArea = document.getElementById("modifiable");
	}	
}