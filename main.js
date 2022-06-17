/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp (in seconds)
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getTime/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getTime/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getUnixTime/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getUnixTime/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUnixTime)
/* harmony export */ });
/* harmony import */ var _getTime_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getTime/index.js */ "./node_modules/date-fns/esm/getTime/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */

function getUnixTime(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return Math.floor((0,_getTime_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) / 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/APIcontrol.js":
/*!***************************!*\
  !*** ./src/APIcontrol.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getUnixTime/index.js");


const APIkey = '1cd7a53a027e50aa2ec7f34c51b6db15';

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
    );
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const data = await response.json();
    const obj = {
      cityname: data.name,
      id: data.weather[0].id,
      country: data.sys.country,
      weather: data.weather[0].description,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      feelslike: data.main.feels_like,
      tempmin: data.main.temp_min,
      tempmax: data.main.temp_max,
      windspeed: data.wind.speed,
      datetime: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()),
      timezone: data.timezone,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };
    return obj;
  } catch (error) {
    console.log(error);
    return null;
  }
}




/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _APIcontrol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIcontrol */ "./src/APIcontrol.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/helper.js");



const displayController = (function () {
  const form = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search');
  const searchBtn = document.querySelector('#search-btn');
  const cityElement = document.querySelector('#city');
  const weatherElement = document.querySelector('#weather');
  const tempElement = document.querySelector('#temp');
  const feelsLikeElement = document.querySelector('#feels-like');
  const humidityElement = document.querySelector('#humidity');
  const windSpeedElement = document.querySelector('#wind-speed');
  const weatherImg = document.querySelector('#weather-icon');
  const dateTimeElement = document.querySelector('#date-time');
  const mainElement = document.querySelector('.main');
  const changeUnitBtn = document.querySelector('.unit-btn');
  const warningElement = document.querySelector('.warning');
  let currentSearch = 'Singapore';
  let currentWeatherData;
  let units = 'metric';

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputVal = searchInput.value;
    if (!inputVal) {
    } else {
      const weatherData = await (0,_APIcontrol__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(inputVal);
      if (weatherData === null) {
        warningElement.classList.add('show');
        form.reset();
        return;
      } else {
        currentSearch = inputVal;
        currentWeatherData = weatherData;
        localStorage.setItem('lastSearch', currentSearch);
        warningElement.classList.remove('show');
        viewWeather(weatherData);
        form.reset();
      }
    }
  });
  changeUnitBtn.addEventListener('click', (e) => {
    changeUnits();
    if (units === 'metric') {
      e.target.textContent = 'Metric';
      localStorage.setItem('units', 'metric');
    } else {
      e.target.textContent = 'Imperial';
      localStorage.setItem('units', 'imperial');
    }
    viewWeather(currentWeatherData);
  });
  async function initialise() {
    if (localStorage.getItem('lastSearch') !== null) {
      currentSearch = localStorage.getItem('lastSearch');
    }
    if (localStorage.getItem('units') !== null) {
      if (localStorage.getItem('units') === 'imperial') {
        changeUnits();
        changeUnitBtn.textContent = 'Imperial';
      } else {
        changeUnitBtn.textContent = 'Metric';
      }
    } else {
      changeUnitBtn.textContent = 'Metric';
    }
    const weatherData = await (0,_APIcontrol__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(currentSearch);
    currentWeatherData = weatherData;
    viewWeather(weatherData);
  }
  function viewWeather(data) {
    const localDateTime = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.formatTime)(data.datetime, data.timezone);
    const dayTime = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.isDayTime)(
      data.datetime,
      data.sunrise,
      data.sunset,
      data.timezone
    );
    changeBackground(dayTime);
    if (typeof data.country === 'undefined') {
      cityElement.textContent = `${data.cityname}`;
    } else {
      cityElement.textContent = `${data.cityname}, ${data.country}`;
    }
    weatherElement.textContent = `${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.capitalize)(data.weather)}`;
    tempElement.textContent =
      units === 'metric'
        ? `${data.temperature} °C`
        : `${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.convertToF)(data.temperature)} °F`;
    feelsLikeElement.textContent =
      units === 'metric'
        ? `${data.feelslike} °C`
        : `${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.convertToF)(data.feelslike)} °F`;
    humidityElement.textContent = `${data.humidity} %`;
    windSpeedElement.textContent =
      units === 'metric'
        ? `${data.windspeed} m/s`
        : `${(0,_helper__WEBPACK_IMPORTED_MODULE_1__.convertToMPH)(data.windspeed)} mph`;
    dateTimeElement.textContent = localDateTime;
    weatherImg.src = getWeatherIcon(data.id, dayTime);
  }
  function getWeatherIcon(id, day) {
    const conditionID = parseInt(id);
    let weather;
    if (conditionID >= 200 && conditionID < 300) {
      // weather = 'Thunderstorm';
      return '../dist/assets/weather icons/storm.png';
    } else if (conditionID >= 300 && conditionID < 600) {
      // weather = 'Rain';
      return '../dist/assets/weather icons/raining.png';
    } else if (conditionID >= 600 && conditionID < 700) {
      // weather = 'Snow';
      return '../dist/assets/weather icons/snowflake.png';
    } else if (conditionID >= 700 && conditionID < 800) {
      // weather = 'Atmosphere';
      return '../dist/assets/weather icons/wind.png';
    } else if (conditionID > 800 && conditionID < 900) {
      // weather = 'Cloud';
      if (day) {
        return '../dist/assets/weather icons/cloudy-day.png';
      } else return '../dist/assets/weather icons/cloudy-night.png';
    } else if (conditionID == 800) {
      // weather = 'Clear';
      if (day) {
        return '../dist/assets/weather icons/sun.png';
      } else return '../dist/assets/weather icons/moon.png';
    }
  }

  function changeBackground(day) {
    if (day) {
      mainElement.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('../dist/assets/background.jpg')";
    } else {
      mainElement.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('../dist/assets/night-background.jpg')";
    }
  }

  function changeUnits() {
    if (units === 'metric') {
      units = 'imperial';
    } else {
      units = 'metric';
    }
  }
  return { initialise };
})();




/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "convertToF": () => (/* binding */ convertToF),
/* harmony export */   "convertToMPH": () => (/* binding */ convertToMPH),
/* harmony export */   "formatTime": () => (/* binding */ formatTime),
/* harmony export */   "getTimeOnly": () => (/* binding */ getTimeOnly),
/* harmony export */   "isDayTime": () => (/* binding */ isDayTime)
/* harmony export */ });
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime */ "./node_modules/date-fns/esm/fromUnixTime/index.js");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function isDayTime(time, sunrise, sunset, offset) {
  const currentTime = getTimeOnly(time, offset);
  const sunriseTime = getTimeOnly(sunrise, offset);
  const sunsetTime = getTimeOnly(sunset, offset);
  if (currentTime >= sunriseTime && currentTime < sunsetTime) {
    return true;
  } else {
    return false;
  }
}

function formatTime(time, offset) {
  return (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__["default"])(time + offset)
    .toUTCString()
    .slice(0, 22);
}

function getTimeOnly(time, offset) {
  return formatTime(time, offset).slice(-5);
}

function convertToF(temp) {
  const celcius = +temp;
  const fahrenheit = celcius * (9 / 5) + 32;
  return +fahrenheit.toFixed(2);
}
function convertToMPH(speed) {
  const meterps = +speed;
  const mph = meterps * 2.237;
  return +mph.toFixed(2);
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");


_display__WEBPACK_IMPORTED_MODULE_0__.displayController.initialise();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhDOztBQUU5QyxrRUFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0VGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRVbml4VGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9BUEljb250cm9sLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWUgLSB0aGUgZ2l2ZW4gVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgdGhlIGRhdGUgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb21Vbml4VGltZSgxMzMwNTE1OTA1KVxuICogLy89PiBXZWQgRmViIDI5IDIwMTIgMTE6NDU6MDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9tVW5peFRpbWUoZGlydHlVbml4VGltZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHVuaXhUaW1lID0gdG9JbnRlZ2VyKGRpcnR5VW5peFRpbWUpO1xuICByZXR1cm4gdG9EYXRlKHVuaXhUaW1lICogMTAwMCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHRpbWVzdGFtcFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgdGltZXN0YW1wIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDUuMTIzOlxuICogY29uc3QgcmVzdWx0ID0gZ2V0VGltZShuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1LCA1LCAxMjMpKVxuICogLy89PiAxMzMwNTE1OTA1MTIzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgcmV0dXJuIHRpbWVzdGFtcDtcbn0iLCJpbXBvcnQgZ2V0VGltZSBmcm9tIFwiLi4vZ2V0VGltZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0VW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgc2Vjb25kcyB0aW1lc3RhbXAgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB0aW1lc3RhbXBcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIHRpbWVzdGFtcCBvZiAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1IENFVDpcbiAqIGNvbnN0IHJlc3VsdCA9IGdldFVuaXhUaW1lKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUsIDUpKVxuICogLy89PiAxMzMwNTEyMzA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VW5peFRpbWUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gTWF0aC5mbG9vcihnZXRUaW1lKGRpcnR5RGF0ZSkgLyAxMDAwKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBmb3JtYXQsIGdldFVuaXhUaW1lIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBBUElrZXkgPSAnMWNkN2E1M2EwMjdlNTBhYTJlYzdmMzRjNTFiNmRiMTUnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElrZXl9JnVuaXRzPW1ldHJpY2BcbiAgICApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVzcG9uc2Ugbm90IG9rJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgY2l0eW5hbWU6IGRhdGEubmFtZSxcbiAgICAgIGlkOiBkYXRhLndlYXRoZXJbMF0uaWQsXG4gICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgdGVtcGVyYXR1cmU6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIGZlZWxzbGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICB0ZW1wbWluOiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgICB0ZW1wbWF4OiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICB3aW5kc3BlZWQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgIGRhdGV0aW1lOiBnZXRVbml4VGltZShuZXcgRGF0ZSgpKSxcbiAgICAgIHRpbWV6b25lOiBkYXRhLnRpbWV6b25lLFxuICAgICAgc3VucmlzZTogZGF0YS5zeXMuc3VucmlzZSxcbiAgICAgIHN1bnNldDogZGF0YS5zeXMuc3Vuc2V0LFxuICAgIH07XG4gICAgcmV0dXJuIG9iajtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEgfTtcbiIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSAnLi9BUEljb250cm9sJztcbmltcG9ydCB7XG4gIGZvcm1hdFRpbWUsXG4gIGNhcGl0YWxpemUsXG4gIGlzRGF5VGltZSxcbiAgY29udmVydFRvRixcbiAgY29udmVydFRvTVBILFxufSBmcm9tICcuL2hlbHBlcic7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKTtcbiAgY29uc3QgY2l0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuICBjb25zdCB3ZWF0aGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG4gIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbiAgY29uc3QgZmVlbHNMaWtlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlJyk7XG4gIGNvbnN0IGh1bWlkaXR5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuICBjb25zdCB3aW5kU3BlZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcbiAgY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWljb24nKTtcbiAgY29uc3QgZGF0ZVRpbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtdGltZScpO1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGNvbnN0IGNoYW5nZVVuaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC1idG4nKTtcbiAgY29uc3Qgd2FybmluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybmluZycpO1xuICBsZXQgY3VycmVudFNlYXJjaCA9ICdTaW5nYXBvcmUnO1xuICBsZXQgY3VycmVudFdlYXRoZXJEYXRhO1xuICBsZXQgdW5pdHMgPSAnbWV0cmljJztcblxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dFZhbCA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGlmICghaW5wdXRWYWwpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShpbnB1dFZhbCk7XG4gICAgICBpZiAod2VhdGhlckRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgd2FybmluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRTZWFyY2ggPSBpbnB1dFZhbDtcbiAgICAgICAgY3VycmVudFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0U2VhcmNoJywgY3VycmVudFNlYXJjaCk7XG4gICAgICAgIHdhcm5pbmdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgdmlld1dlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgY2hhbmdlVW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoKTtcbiAgICBpZiAodW5pdHMgPT09ICdtZXRyaWMnKSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdNZXRyaWMnO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VuaXRzJywgJ21ldHJpYycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdJbXBlcmlhbCc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pdHMnLCAnaW1wZXJpYWwnKTtcbiAgICB9XG4gICAgdmlld1dlYXRoZXIoY3VycmVudFdlYXRoZXJEYXRhKTtcbiAgfSk7XG4gIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXN0U2VhcmNoJykgIT09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRTZWFyY2ggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdFNlYXJjaCcpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuaXRzJykgIT09IG51bGwpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5pdHMnKSA9PT0gJ2ltcGVyaWFsJykge1xuICAgICAgICBjaGFuZ2VVbml0cygpO1xuICAgICAgICBjaGFuZ2VVbml0QnRuLnRleHRDb250ZW50ID0gJ0ltcGVyaWFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZVVuaXRCdG4udGV4dENvbnRlbnQgPSAnTWV0cmljJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbmdlVW5pdEJ0bi50ZXh0Q29udGVudCA9ICdNZXRyaWMnO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGN1cnJlbnRTZWFyY2gpO1xuICAgIGN1cnJlbnRXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhO1xuICAgIHZpZXdXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgfVxuICBmdW5jdGlvbiB2aWV3V2VhdGhlcihkYXRhKSB7XG4gICAgY29uc3QgbG9jYWxEYXRlVGltZSA9IGZvcm1hdFRpbWUoZGF0YS5kYXRldGltZSwgZGF0YS50aW1lem9uZSk7XG4gICAgY29uc3QgZGF5VGltZSA9IGlzRGF5VGltZShcbiAgICAgIGRhdGEuZGF0ZXRpbWUsXG4gICAgICBkYXRhLnN1bnJpc2UsXG4gICAgICBkYXRhLnN1bnNldCxcbiAgICAgIGRhdGEudGltZXpvbmVcbiAgICApO1xuICAgIGNoYW5nZUJhY2tncm91bmQoZGF5VGltZSk7XG4gICAgaWYgKHR5cGVvZiBkYXRhLmNvdW50cnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eW5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2l0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHluYW1lfSwgJHtkYXRhLmNvdW50cnl9YDtcbiAgICB9XG4gICAgd2VhdGhlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjYXBpdGFsaXplKGRhdGEud2VhdGhlcil9YDtcbiAgICB0ZW1wRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICB1bml0cyA9PT0gJ21ldHJpYydcbiAgICAgICAgPyBgJHtkYXRhLnRlbXBlcmF0dXJlfSDCsENgXG4gICAgICAgIDogYCR7Y29udmVydFRvRihkYXRhLnRlbXBlcmF0dXJlKX0gwrBGYDtcbiAgICBmZWVsc0xpa2VFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgIHVuaXRzID09PSAnbWV0cmljJ1xuICAgICAgICA/IGAke2RhdGEuZmVlbHNsaWtlfSDCsENgXG4gICAgICAgIDogYCR7Y29udmVydFRvRihkYXRhLmZlZWxzbGlrZSl9IMKwRmA7XG4gICAgaHVtaWRpdHlFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0gJWA7XG4gICAgd2luZFNwZWVkRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICB1bml0cyA9PT0gJ21ldHJpYydcbiAgICAgICAgPyBgJHtkYXRhLndpbmRzcGVlZH0gbS9zYFxuICAgICAgICA6IGAke2NvbnZlcnRUb01QSChkYXRhLndpbmRzcGVlZCl9IG1waGA7XG4gICAgZGF0ZVRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gbG9jYWxEYXRlVGltZTtcbiAgICB3ZWF0aGVySW1nLnNyYyA9IGdldFdlYXRoZXJJY29uKGRhdGEuaWQsIGRheVRpbWUpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKGlkLCBkYXkpIHtcbiAgICBjb25zdCBjb25kaXRpb25JRCA9IHBhcnNlSW50KGlkKTtcbiAgICBsZXQgd2VhdGhlcjtcbiAgICBpZiAoY29uZGl0aW9uSUQgPj0gMjAwICYmIGNvbmRpdGlvbklEIDwgMzAwKSB7XG4gICAgICAvLyB3ZWF0aGVyID0gJ1RodW5kZXJzdG9ybSc7XG4gICAgICByZXR1cm4gJy4uL2Rpc3QvYXNzZXRzL3dlYXRoZXIgaWNvbnMvc3Rvcm0ucG5nJztcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbklEID49IDMwMCAmJiBjb25kaXRpb25JRCA8IDYwMCkge1xuICAgICAgLy8gd2VhdGhlciA9ICdSYWluJztcbiAgICAgIHJldHVybiAnLi4vZGlzdC9hc3NldHMvd2VhdGhlciBpY29ucy9yYWluaW5nLnBuZyc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25JRCA+PSA2MDAgJiYgY29uZGl0aW9uSUQgPCA3MDApIHtcbiAgICAgIC8vIHdlYXRoZXIgPSAnU25vdyc7XG4gICAgICByZXR1cm4gJy4uL2Rpc3QvYXNzZXRzL3dlYXRoZXIgaWNvbnMvc25vd2ZsYWtlLnBuZyc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25JRCA+PSA3MDAgJiYgY29uZGl0aW9uSUQgPCA4MDApIHtcbiAgICAgIC8vIHdlYXRoZXIgPSAnQXRtb3NwaGVyZSc7XG4gICAgICByZXR1cm4gJy4uL2Rpc3QvYXNzZXRzL3dlYXRoZXIgaWNvbnMvd2luZC5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uSUQgPiA4MDAgJiYgY29uZGl0aW9uSUQgPCA5MDApIHtcbiAgICAgIC8vIHdlYXRoZXIgPSAnQ2xvdWQnO1xuICAgICAgaWYgKGRheSkge1xuICAgICAgICByZXR1cm4gJy4uL2Rpc3QvYXNzZXRzL3dlYXRoZXIgaWNvbnMvY2xvdWR5LWRheS5wbmcnO1xuICAgICAgfSBlbHNlIHJldHVybiAnLi4vZGlzdC9hc3NldHMvd2VhdGhlciBpY29ucy9jbG91ZHktbmlnaHQucG5nJztcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbklEID09IDgwMCkge1xuICAgICAgLy8gd2VhdGhlciA9ICdDbGVhcic7XG4gICAgICBpZiAoZGF5KSB7XG4gICAgICAgIHJldHVybiAnLi4vZGlzdC9hc3NldHMvd2VhdGhlciBpY29ucy9zdW4ucG5nJztcbiAgICAgIH0gZWxzZSByZXR1cm4gJy4uL2Rpc3QvYXNzZXRzL3dlYXRoZXIgaWNvbnMvbW9vbi5wbmcnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmQoZGF5KSB7XG4gICAgaWYgKGRheSkge1xuICAgICAgbWFpbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpICx1cmwoJy4uL2Rpc3QvYXNzZXRzL2JhY2tncm91bmQuanBnJylcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpICx1cmwoJy4uL2Rpc3QvYXNzZXRzL25pZ2h0LWJhY2tncm91bmQuanBnJylcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VVbml0cygpIHtcbiAgICBpZiAodW5pdHMgPT09ICdtZXRyaWMnKSB7XG4gICAgICB1bml0cyA9ICdpbXBlcmlhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXRzID0gJ21ldHJpYyc7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGluaXRpYWxpc2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgZnJvbVVuaXhUaW1lIGZyb20gJ2RhdGUtZm5zL2Zyb21Vbml4VGltZSc7XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuZnVuY3Rpb24gaXNEYXlUaW1lKHRpbWUsIHN1bnJpc2UsIHN1bnNldCwgb2Zmc2V0KSB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gZ2V0VGltZU9ubHkodGltZSwgb2Zmc2V0KTtcbiAgY29uc3Qgc3VucmlzZVRpbWUgPSBnZXRUaW1lT25seShzdW5yaXNlLCBvZmZzZXQpO1xuICBjb25zdCBzdW5zZXRUaW1lID0gZ2V0VGltZU9ubHkoc3Vuc2V0LCBvZmZzZXQpO1xuICBpZiAoY3VycmVudFRpbWUgPj0gc3VucmlzZVRpbWUgJiYgY3VycmVudFRpbWUgPCBzdW5zZXRUaW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSwgb2Zmc2V0KSB7XG4gIHJldHVybiBmcm9tVW5peFRpbWUodGltZSArIG9mZnNldClcbiAgICAudG9VVENTdHJpbmcoKVxuICAgIC5zbGljZSgwLCAyMik7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVPbmx5KHRpbWUsIG9mZnNldCkge1xuICByZXR1cm4gZm9ybWF0VGltZSh0aW1lLCBvZmZzZXQpLnNsaWNlKC01KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvRih0ZW1wKSB7XG4gIGNvbnN0IGNlbGNpdXMgPSArdGVtcDtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGNlbGNpdXMgKiAoOSAvIDUpICsgMzI7XG4gIHJldHVybiArZmFocmVuaGVpdC50b0ZpeGVkKDIpO1xufVxuZnVuY3Rpb24gY29udmVydFRvTVBIKHNwZWVkKSB7XG4gIGNvbnN0IG1ldGVycHMgPSArc3BlZWQ7XG4gIGNvbnN0IG1waCA9IG1ldGVycHMgKiAyLjIzNztcbiAgcmV0dXJuICttcGgudG9GaXhlZCgyKTtcbn1cblxuZXhwb3J0IHtcbiAgY2FwaXRhbGl6ZSxcbiAgaXNEYXlUaW1lLFxuICBmb3JtYXRUaW1lLFxuICBnZXRUaW1lT25seSxcbiAgY29udmVydFRvRixcbiAgY29udmVydFRvTVBILFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tICcuL2Rpc3BsYXknO1xuXG5kaXNwbGF5Q29udHJvbGxlci5pbml0aWFsaXNlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=