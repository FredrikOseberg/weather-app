'use strict';

import activities from './data/activities';
import weatherApi from './apikeys';
import './styles/style.scss';


var flag;
// get html to populate with data
let domStrings = {
	location: document.getElementById('weatherLocation'),
	description: document.getElementById('weatherDescription'),
	icon: document.getElementById('weatherIcon'),
	temperature: document.getElementById('weatherTemperature'),
	temperatureSwitch: document.getElementById('weatherTemperatureSwitch'),
	activityBox: document.getElementById('activityBox'),
	todoList: document.getElementById('todoList'),
	addTodoListItem: document.querySelectorAll('.activityAdd'),
	deleteTodoListItem: document.querySelectorAll('.deleteItem')
}

// get user location
fetch(`http://ip-api.com/json`)
.then(res => res.json())
.then(data => {
	// get weather from location
	fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&units=Imperial&APPID=${weatherApi}`)
	.then(res => res.json())
	.then(data => {
		updateWeatherBox(data);
		renderSuggestedActivities(data.weather[0].main);
	});
});

// Change from celsius to fahrenheit and vica versa on btn click
domStrings.temperatureSwitch.addEventListener('click', () => {
	domStrings.temperature.style.opacity = '0';
	setTimeout(() => {
		if (flag === undefined) {
		let fahrenheit = domStrings.temperature.textContent;
		fahrenheit = Number(fahrenheit.split(" ")[0]);

		let celsius = toCelsius(fahrenheit);
		domStrings.temperature.textContent = `${celsius} C`;
		domStrings.temperatureSwitch.textContent = "Switch to Fahrenheit";
		domStrings.temperature.style.opacity = '1';

		flag = 'celsius';
	} else {
		let celsius = domStrings.temperature.textContent;
		celsius = Number(celsius.split(" ")[0]);

		celsius = toFahrenheit(celsius);
		domStrings.temperature.textContent = `${celsius} F`;
		domStrings.temperatureSwitch.textContent = "Switch to Celsius";
		domStrings.temperature.style.opacity = '1';


		flag = undefined;
		}
	}, 500);


});

// Update values and icons in weatherbox
function updateWeatherBox(data) {
	domStrings.location.textContent = data.name;
	domStrings.description.textContent = data.weather[0].main;
	domStrings.temperature.textContent = `${data.main.temp} F`;
	// Set icon and bg image based on weather
	if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
		domStrings.icon.className = '';
		domStrings.icon.classList.add('fa', 'fa-tint');

		document.body.style.backgroundImage = "url('img/rain.jpg')";
	} else if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
		domStrings.icon.className = '';
		domStrings.icon.classList.add('fa', 'fa-cloud');

		document.body.style.backgroundImage = "url('img/clouds.jpeg')";

	} else if (data.weather[0].id === 800) {
		domStrings.icon.className = '';
		domStrings.icon.classList.add('fa', 'fa-sun-o');

		document.body.style.backgroundImage = "url('img/sun.jpg')";
	} else {
		domStrings.icon.className = '';
		domStrings.icon.classList.add('fa', 'fa-sun-o');
		domStrings.description.textContent = 'Weather is unclear';

		document.body.style.backgroundImage = "url('img/unclear.jpeg')";
	}
}


// Configure todolist delete button
function deleteItem() {
	let item = this.parentNode;
	domStrings.todoList.removeChild(item);
}

// create activity UI
function createActivityUI(activity) {
	console.log(activity.data);
	let dataUI = activity.data.map(item => {
		return (
		`
		<div class="activityDetailsItem">
			<div class="row">
				<div class="col sm12 m4">
					<img src="${item.img}">
				</div>
				<div class="col sm12 m8">
					<h5>${item.name}</h5>
				</div>
			</div>
		</div>
		`
		)
	});
	dataUI = dataUI.join("").replace(/,/g, "");

	return `<div class="activityItem">
				<div class="row">
					<div class="col m6 s12">
						<img src="${activity.img}" class="showDetails">
					</div>
					<div class="col m6 s12">
						<h4>${activity.name}</h4>
						<button class="activityAdd">+</button>
					</div>
				</div>
			</div>

			<div class="activityDetails hideDetails">
				<div class="row">
					<div class="activityDetailsWrapper">
						<div class="col sm12 m12">
							<p>Suggestions</p>
							<i class="fa fa-times removeDetailsButton"></i>
						</div>
					</div>
				</div>

				${dataUI}
			</div>`;
}

// Render correct activities
function renderSuggestedActivities(weather) {
	if (weather === 'Rain') {
		let suggestedAct = activities.filter(item => {
			return (item.weather === 'Rain' || item.weather === 'All');
		});

		suggestedAct.forEach(item => {
			let ui = createActivityUI(item); 
			domStrings.activityBox.innerHTML += ui;
		});
	} else if (weather === 'Clear') {
		let suggestedAct = activities.filter(item => {
			return (item.weather === 'Sunny' || item.weather === 'All');
		});

		suggestedAct.forEach(item => {
			let ui = createActivityUI(item); 
			domStrings.activityBox.innerHTML += ui;
		});
	} else {
		let suggestedAct = activities.filter(item => {
			return (item.weather === 'All' || item === 'Rain' || item === 'Sunny');
		});

		suggestedAct.forEach(item => {
			let ui = createActivityUI(item); 
			domStrings.activityBox.innerHTML += ui;
		});
	}
	
	// Add dynamically created items to todolist
	document.querySelectorAll('.activityAdd').forEach(item => {
		item.onclick = e => {
			let content = e.target.previousElementSibling.textContent;
			addItemToList(content);
		}
	});

	// Add button to show more information on each activity
	document.querySelectorAll('.showDetails').forEach(item => {
		item.onclick = e => {
			const activityDetails = item.parentNode.parentNode.parentNode.nextElementSibling;

			if (activityDetails.classList.contains('hideDetails')) {
				activityDetails.classList.remove('hideDetails');
				setTimeout(() => {
					activityDetails.classList.add('activityDetails100');
				}, 200);
			} else {
				activityDetails.classList.add('hideDetails');
				activityDetails.classList.remove('activityDetails100');
			}
		}
	});

	// Add button to remove class from activityDetailsItem
	document.querySelectorAll('.removeDetailsButton').forEach(item => {
		item.onclick = e => {
			let activityDetails = e.target.parentNode.parentNode.parentNode.parentNode;
			if (!activityDetails.classList.contains('hideDetails')) {
				activityDetails.classList.add('hideDetails');
				activityDetails.classList.remove('activityDetails100');
			}
		}
	});
}

//create and add todolistitem
function addItemToList(content) {
	let listItem = createElement('li');
	listItem.innerHTML = `${content}<i class="fa fa-times deleteItem"></i>`;
	let deleteButton = listItem.children[0];
	deleteButton.onclick = deleteItem;
	domStrings.todoList.appendChild(listItem);
}

function createElement(el) {
	return document.createElement(el);
}

function toCelsius(fahrenheit) {
	return Math.round((5/9) * (fahrenheit-32));
}

function toFahrenheit(celsius) {
	return (celsius * 9/5) + 32;
}



