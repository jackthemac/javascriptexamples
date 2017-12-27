window.addEventListener("load",initAll,false);

function initAll() {
	var radioButtons = document.getElementsByTagName("input");
	
	for (var i=0; i<radioButtons.length; i++) {
		if (radioButtons[i].type == "radio") {
			radioButtons[i].addEventListener("click",chgChart,false);
		}
	}
	chgChart();
}

function chgChart() {
	var bChart = {
		name: "Desktop browser usage by year",
		years: [2010,2011,2012,2013,2014],
		fieldnames: ["MS IE","Firefox","Chrome"],
		fields: [
			[51.45,42.93,33.74,29.25,24.5],
			[31.27,28.2,24.15,20.82,20.53],
			[10.25,21.08,33.23,42.63,46.6]
		]
	}
	
	var mobiChart = {
		name: "Mobile device vendors by year",
		years: [2010,2011,2012,2013,2014],
		fieldnames: ["Nokia","Apple","Samsung","RIM"],
		fields: [
			[36.93,38.44,29.27,21.4,17.6],
			[28.88,27.51,24.39,24.01,23.23],
			[4.5,11,18.96,25.47,29.39],
			[19.78,14.38,5.22,3.65,2.87]
		]
	}

	var radioButtons = document.getElementsByTagName("input");
	var currDirection = getButton("direction");
	var imgSrc = "images/" + getButton("color");
	
	if (getButton("type")=="browser") {	
		var thisChart = bChart;
	}
	else {
		var thisChart = mobiChart;
	}
	
	var chartBody = "<h2>"+thisChart.name+"</h2><table>";
	
	for (var i=0; i<thisChart.years.length; i++) {
		if (currDirection == "horizontal") {
			chartBody += "<tr class='horiz'><th rowspan="+(thisChart.fieldnames.length+1);
			chartBody += ">"+thisChart.years[i]+"</th><td colspan=2></td></tr>";
			for (var j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<tr class='horiz'><td>"+thisChart.fieldnames[j];
				chartBody += "</td><td><img alt='horiz bar' src='"+imgSrc;
				chartBody += "' width="+thisChart.fields[j][i]*3+">";
				chartBody += thisChart.fields[j][i]+"</td></tr>";
			}
		}
		else {
			chartBody += "<tr class='vert'><th rowspan=2>"+thisChart.years[i]+"</th>";
			for (var j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<td><img alt='vert bar' src='"+imgSrc;
				chartBody += "' height="+thisChart.fields[j][i]*3+"></td>";
			}
			chartBody += "</tr><tr class='vert'>";
			for (j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<td>"+thisChart.fields[j][i]+"<br>";
				chartBody += thisChart.fieldnames[j]+"</td>";
			}
			chartBody += "</tr>";
		}
	}

	chartBody += "</table>";
	document.getElementById("chartArea").innerHTML = chartBody;

	function getButton(buttonSet) {
		for (var i=0; i<radioButtons.length; i++) {
			if (radioButtons[i].name == buttonSet && radioButtons[i].checked) {
				return radioButtons[i].value;
			}
		}
		return -1;
	}
}