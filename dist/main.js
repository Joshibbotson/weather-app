/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const DOM = {\n    clouds: document.querySelector(\".clouds\"),\n    city: document.querySelector(\".city\"),\n    date: document.querySelector(\".date\"),\n    time: document.querySelector(\".time\"),\n    temp: document.querySelector(\".main-temp\"),\n}\n\nasync function getLocation(city) {\n    const response = await fetch(\n        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=3019f42598e2771e78de4788949e7fff`,\n        { mode: \"cors\" }\n    )\n    response\n        .json()\n        .then(function (response) {\n            return getTemp(`lat=${response[0].lat}&lon=${response[0].lon}`)\n        })\n        .catch(function () {\n            console.log(\"failure\")\n        })\n}\n\nasync function getTemp(latAndLon) {\n    const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?${latAndLon}&appid=3019f42598e2771e78de4788949e7fff`,\n        {\n            mode: \"cors\",\n        }\n    )\n    response\n        .json()\n        .then(function (response) {\n            console.log(response)\n            DOM.temp.innerHTML = kelvinToCelcius(response.main.temp) + \" °C\"\n        })\n        .catch(function () {\n            console.log(\"failure in gettemp\")\n        })\n}\n\nfunction kelvinToCelcius(temp) {\n    return Math.trunc(temp - 273.15)\n}\n\ngetLocation(\"tokyo\")\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;