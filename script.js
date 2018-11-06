var handleClick = function () {
	var el = document.getElementById('demo');
	el.innerHTML = Date();

	console.log("I' helping!");
	var cars=['one','two'];
	for (var i = 0; i < cars.length; i++) {
		console.log(cars[i]);
	}
var j=0;
	while (j < 10) {
		console.log('It\'s '+j);
		j++;
	}
	window.open("https://www.yandex.ru/"); // open a new window
	window.close(); // close the current window
	window.screen.width; // 1920
	window.screen.height; // 1080
	window.alert("Annoying!");
	window.console.log('Message');
	window.console.warn('Warning');
	window.console.error('Error');

};
function loadDoc() {
	var el = document.getElementById('demo1');
	el.innerHTML = Date();
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			console.log(this.responseText);
		}
	};
	xhttp.open("GET", "https://github.com", true);
	xhttp.send();

	fetch('https://github.com')
		.then(function (response) {
			console.log(response)
		});

	axios.get('https://github.com')
		.then(function (response) {
			console.log(response);
		});


}

