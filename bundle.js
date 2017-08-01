/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'ee8b72de42444e91b059bbb07d936161';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
	name: 'Gaming',
	img: 'img/controller.jpeg',
	weather: 'All',
	data: [{
		name: 'Breath of the Wild',
		img: 'img/botw.jpg',
		platform: 'Nintendo Switch'
	}, {
		name: 'The Witcher 3: The Wild Hunt',
		img: 'img/witcher3.jpeg',
		platform: 'PC'
	}]
}, {
	name: "Beach Volleyball",
	img: 'img/beach.jpeg',
	weather: 'Clear',
	data: [{
		name: 'Kristian',
		img: 'img/gryt.jpg'
	}, {
		name: 'Julie',
		img: 'img/julie.jpg'
	}, {
		name: 'Vetle',
		img: 'img/vetle.jpg'
	}, {
		name: 'Sindre',
		img: 'img/sindre.jpg'
	}]
}, {
	name: "Workout",
	img: 'img/workout.jpeg',
	weather: 'All',
	data: [{
		name: 'Running',
		img: 'img/running.jpeg'
	}, {
		name: 'Yoga',
		img: 'img/yoga.jpeg'
	}, {
		name: 'Weight Training',
		img: 'img/weights.jpeg'
	}]
}, {
	name: "Coding",
	img: "img/coding.jpeg",
	weather: 'All',
	data: [{
		name: 'FreecodeCamp',
		img: 'img/freecodecamp.png'
	}, {
		name: 'Udacity',
		img: 'img/udacity.png'
	}, {
		name: 'Udemy',
		img: 'img/udemy.png'
	}]
}, {
	name: "Reading",
	img: "img/reading.jpg",
	weather: 'All',
	data: [{
		name: 'Wheel of Time',
		img: 'img/wheeloftime.jpeg'
	}, {
		name: 'Stormlight',
		img: 'img/stormlight.png'
	}, {
		name: 'Mistborn',
		img: 'img/mistborn.jpg'
	}]
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _activities = __webpack_require__(1);

var _activities2 = _interopRequireDefault(_activities);

var _apikeys = __webpack_require__(0);

var _apikeys2 = _interopRequireDefault(_apikeys);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flag;
// get html to populate with data
var domStrings = {
	location: document.getElementById('weatherLocation'),
	description: document.getElementById('weatherDescription'),
	icon: document.getElementById('weatherIcon'),
	temperature: document.getElementById('weatherTemperature'),
	temperatureSwitch: document.getElementById('weatherTemperatureSwitch'),
	activityBox: document.getElementById('activityBox'),
	todoList: document.getElementById('todoList'),
	addTodoListItem: document.querySelectorAll('.activityAdd'),
	deleteTodoListItem: document.querySelectorAll('.deleteItem')
};

// get user location
fetch('http://ip-api.com/json').then(function (res) {
	return res.json();
}).then(function (data) {
	// get weather from location
	fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + data.lat + '&lon=' + data.lon + '&units=Imperial&APPID=' + _apikeys2.default).then(function (res) {
		return res.json();
	}).then(function (data) {
		console.log(data);
		updateWeatherBox(data);
		renderSuggestedActivities(data.weather[0].main);
	});
});

// Change from celsius to fahrenheit and vica versa on btn click
domStrings.temperatureSwitch.addEventListener('click', function () {
	domStrings.temperature.style.opacity = '0';
	setTimeout(function () {
		if (flag === undefined) {
			var fahrenheit = domStrings.temperature.textContent;
			fahrenheit = Number(fahrenheit.split(" ")[0]);

			var celsius = toCelsius(fahrenheit);
			domStrings.temperature.textContent = celsius + ' C';
			domStrings.temperatureSwitch.textContent = "Switch to Fahrenheit";
			domStrings.temperature.style.opacity = '1';

			flag = 'celsius';
		} else {
			var _celsius = domStrings.temperature.textContent;
			_celsius = Number(_celsius.split(" ")[0]);

			_celsius = toFahrenheit(_celsius);
			domStrings.temperature.textContent = _celsius + ' F';
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
	domStrings.temperature.textContent = data.main.temp + ' F';
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
	var item = this.parentNode;
	domStrings.todoList.removeChild(item);
}

// create activity UI
function createActivityUI(activity) {
	console.log(activity.data);
	var dataUI = activity.data.map(function (item) {
		return '\n\t\t<div class="activityDetailsItem">\n\t\t\t<div class="row">\n\t\t\t\t<div class="col sm12 m4">\n\t\t\t\t\t<img src="' + item.img + '">\n\t\t\t\t</div>\n\t\t\t\t<div class="col sm12 m8">\n\t\t\t\t\t<h5>' + item.name + '</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t';
	});
	dataUI = dataUI.join("").replace(/,/g, "");

	return '<div class="activityItem">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col m6 s12">\n\t\t\t\t\t\t<img src="' + activity.img + '" class="showDetails">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col m6 s12">\n\t\t\t\t\t\t<h4>' + activity.name + '</h4>\n\t\t\t\t\t\t<button class="activityAdd">+</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="activityDetails hideDetails">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="activityDetailsWrapper">\n\t\t\t\t\t\t<div class="col sm12 m12">\n\t\t\t\t\t\t\t<p>Suggestions</p>\n\t\t\t\t\t\t\t<i class="fa fa-times removeDetailsButton"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t' + dataUI + '\n\t\t\t</div>';
}

// Render correct activities
function renderSuggestedActivities(weather) {
	if (weather === 'Rain') {
		var suggestedAct = _activities2.default.filter(function (item) {
			return item.weather === 'Rain' || item.weather === 'All';
		});

		suggestedAct.forEach(function (item) {
			var ui = createActivityUI(item);
			domStrings.activityBox.innerHTML += ui;
		});
	} else if (weather === 'Clear') {
		var _suggestedAct = _activities2.default.filter(function (item) {
			return item.weather === 'Sunny' || item.weather === 'All';
		});

		_suggestedAct.forEach(function (item) {
			var ui = createActivityUI(item);
			domStrings.activityBox.innerHTML += ui;
		});
	} else {
		var _suggestedAct2 = _activities2.default.filter(function (item) {
			return item.weather === 'All' || item === 'Rain' || item === 'Sunny';
		});

		_suggestedAct2.forEach(function (item) {
			var ui = createActivityUI(item);
			domStrings.activityBox.innerHTML += ui;
		});
	}

	// Add dynamically created items to todolist
	document.querySelectorAll('.activityAdd').forEach(function (item) {
		item.onclick = function (e) {
			var content = e.target.previousElementSibling.textContent;
			addItemToList(content);
		};
	});

	// Add button to show more information on each activity
	document.querySelectorAll('.showDetails').forEach(function (item) {
		item.onclick = function (e) {
			var activityDetails = item.parentNode.parentNode.parentNode.nextElementSibling;

			if (activityDetails.classList.contains('hideDetails')) {
				activityDetails.classList.remove('hideDetails');
				setTimeout(function () {
					activityDetails.classList.add('activityDetails100');
				}, 200);
			} else {
				activityDetails.classList.add('hideDetails');
				activityDetails.classList.remove('activityDetails100');
			}
		};
	});

	// Add button to remove class from activityDetailsItem
	document.querySelectorAll('.removeDetailsButton').forEach(function (item) {
		item.onclick = function (e) {
			var activityDetails = e.target.parentNode.parentNode.parentNode.parentNode;
			if (!activityDetails.classList.contains('hideDetails')) {
				activityDetails.classList.add('hideDetails');
				activityDetails.classList.remove('activityDetails100');
			}
		};
	});
}

//create and add todolistitem
function addItemToList(content) {
	var listItem = createElement('li');
	listItem.innerHTML = content + '<i class="fa fa-times deleteItem"></i>';
	var deleteButton = listItem.children[0];
	deleteButton.onclick = deleteItem;
	domStrings.todoList.appendChild(listItem);
}

function createElement(el) {
	return document.createElement(el);
}

function toCelsius(fahrenheit) {
	return Math.round(5 / 9 * (fahrenheit - 32));
}

function toFahrenheit(celsius) {
	return celsius * 9 / 5 + 32;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background-color: #2c3e50;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  padding-top: 100px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.weatherBox, .activityBox, .todo {\n  background-color: #2c3e50;\n  border-radius: 3px;\n  color: #fff;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-top: 15px;\n  max-width: 400px; }\n\n.weatherBoxWrapper {\n  padding-top: 15px; }\n\n#weatherLocation {\n  font-size: 2em;\n  padding: 0;\n  margin: 0;\n  text-align: left; }\n\n#weatherTemperature {\n  font-size: 1.1em;\n  transition: opacity 1s ease; }\n\n#weatherDescription {\n  font-size: 1.1em;\n  text-align: left; }\n\n.activityBox h3 {\n  font-size: 2em; }\n\n.activityBox .activityItem, .activityBox .activityDetails {\n  color: #635b5b;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 100%;\n  background-color: #fff;\n  border-radius: 3px; }\n  .activityBox .activityItem .col, .activityBox .activityDetails .col {\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n  .activityBox .activityItem .showDetails:hover, .activityBox .activityDetails .showDetails:hover {\n    cursor: pointer;\n    opacity: 0.5; }\n  .activityBox .activityItem img, .activityBox .activityDetails img {\n    display: block;\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n    width: 100%;\n    height: 100%; }\n  .activityBox .activityItem h4, .activityBox .activityDetails h4 {\n    font-size: 1.2em; }\n  .activityBox .activityItem .activityAdd, .activityBox .activityDetails .activityAdd {\n    border: 1px solid #635b5b;\n    border-radius: 100%;\n    background-color: #fff;\n    height: 40px;\n    width: 40px;\n    padding: 5px;\n    font-size: 1.5em;\n    transition: 1s; }\n    .activityBox .activityItem .activityAdd:hover, .activityBox .activityDetails .activityAdd:hover {\n      background-color: #635b5b;\n      color: #fff; }\n\n.activityBox .activityDetails {\n  padding: 20px;\n  margin-bottom: 15px;\n  transition: all 1s ease;\n  width: 200px; }\n  .activityBox .activityDetails .col {\n    display: flex;\n    flex-direction: row; }\n    .activityBox .activityDetails .col .fa-times {\n      margin-left: auto;\n      font-size: 1.3rem;\n      cursor: pointer; }\n  .activityBox .activityDetails .row {\n    margin-bottom: 0; }\n  .activityBox .activityDetails img {\n    height: 60px;\n    width: 60px;\n    border-radius: 100%; }\n  .activityBox .activityDetails h5 {\n    font-size: 1.2rem; }\n\n.activityBox .hideDetails {\n  display: none; }\n\n.activityBox .activityDetailsItem {\n  padding: 10px 0 18px 0; }\n\n.activityBox .activityDetails100 {\n  width: 100%; }\n\n.todo h3 {\n  font-size: 2em; }\n\n.todo ul {\n  margin-top: 40px; }\n  .todo ul li {\n    background-color: #fff;\n    border-radius: 3px;\n    padding: 10px;\n    color: #635b5b;\n    display: flex;\n    align-items: center;\n    margin: 10px 0; }\n    .todo ul li .fa {\n      margin-left: auto;\n      font-size: 1.2em; }\n      .todo ul li .fa:hover {\n        cursor: pointer; }\n\n.fa {\n  font-size: 2em; }\n\n.fa-sun-o {\n  color: #f1c40f; }\n\n.fa-tint {\n  color: #3498db; }\n\n@media (max-width: 600px) {\n  .weatherBox, .activityBox, .todo {\n    max-width: 100%; } }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);