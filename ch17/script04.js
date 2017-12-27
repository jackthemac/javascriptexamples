window.addEventListener("load",getLocation,false);

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				document.getElementById("lat_field").value = position.coords.latitude;
				document.getElementById("lng_field").value = position.coords.longitude;
			
				document.getElementById("mapQuery").href += position.coords.latitude + "," + position.coords.longitude;
			}
		);
	}
}
