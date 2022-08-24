/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOM\": () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _temperatureMeasurements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperatureMeasurements */ \"./src/temperatureMeasurements.js\");\n\n\nconst DOM = {\n    clouds: document.querySelector(\".clouds\"),\n    city: document.querySelector(\".city\"),\n    date: document.querySelector(\".date\"),\n    time: document.querySelector(\".time\"),\n    temp: document.querySelector(\".main-temp\"),\n    displayF: document.querySelector(\".change-temp-type-F\"),\n    displayC: document.querySelector(\".change-temp-type-C\"),\n}\n\nDOM.displayF.addEventListener(\"click\", () => {\n    return (0,_temperatureMeasurements__WEBPACK_IMPORTED_MODULE_0__.celciusToFahrenheit)(DOM.temp.innerHTML)\n})\nDOM.displayC.addEventListener(\"click\", () => {\n    return (0,_temperatureMeasurements__WEBPACK_IMPORTED_MODULE_0__.fahrenheitToCelcius)(DOM.temp.innerHTML)\n})\n\nasync function getLocation(city) {\n    const response = await fetch(\n        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=3019f42598e2771e78de4788949e7fff`,\n        { mode: \"cors\" }\n    )\n    response\n        .json()\n        .then(function (response) {\n            return getTemp(`lat=${response[0].lat}&lon=${response[0].lon}`)\n        })\n        .catch(function () {\n            console.log(\"failure\")\n        })\n}\n\nasync function getTemp(latAndLon) {\n    const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?${latAndLon}&appid=3019f42598e2771e78de4788949e7fff`,\n        {\n            mode: \"cors\",\n        }\n    )\n    response\n        .json()\n        .then(function (response) {\n            console.log(response)\n            DOM.temp.innerHTML = (0,_temperatureMeasurements__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelcius)(response.main.temp) + \" °C\"\n        })\n        .catch(function () {\n            console.log(\"failure in gettemp\")\n        })\n}\n\ngetLocation(\"tokyo\")\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/temperatureMeasurements.js":
/*!****************************************!*\
  !*** ./src/temperatureMeasurements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"celciusToFahrenheit\": () => (/* binding */ celciusToFahrenheit),\n/* harmony export */   \"fahrenheitToCelcius\": () => (/* binding */ fahrenheitToCelcius),\n/* harmony export */   \"kelvinToCelcius\": () => (/* binding */ kelvinToCelcius)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nfunction kelvinToCelcius(temp) {\n    return Math.round(temp - 273.15)\n}\n\nfunction celciusToFahrenheit(temp) {\n    let intTemp = String(temp).replace(\"°C\", \"\")\n    intTemp = parseInt(intTemp)\n    return (\n        (___WEBPACK_IMPORTED_MODULE_0__.DOM.temp.innerHTML = Math.round(intTemp * (9 / 5) + 32) + \" °F\"),\n        (___WEBPACK_IMPORTED_MODULE_0__.DOM.displayC.style.display = \"flex\"),\n        (___WEBPACK_IMPORTED_MODULE_0__.DOM.displayF.style.display = \"none\")\n    )\n}\n\nfunction fahrenheitToCelcius(temp) {\n    let intTemp = String(temp).replace(\"°C\", \"\")\n    intTemp = parseInt(intTemp)\n    return (\n        (___WEBPACK_IMPORTED_MODULE_0__.DOM.temp.innerHTML = Math.round((intTemp - 32) * (5 / 9)) + \" °C\"),\n        (___WEBPACK_IMPORTED_MODULE_0__.DOM.displayC.style.display = \"none\"),\n        (___WEBPACK_IMPORTED_MODULE_0__.DOM.displayF.style.display = \"flex\")\n    )\n}\n\n\n//# sourceURL=webpack://weather-app/./src/temperatureMeasurements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;