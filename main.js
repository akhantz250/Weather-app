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
/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/background.jpg */ "./src/assets/background.jpg");
/* harmony import */ var _assets_night_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/night-background.jpg */ "./src/assets/night-background.jpg");
/* harmony import */ var _assets_weather_icons_cloudy_day_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/weather icons/cloudy-day.png */ "./src/assets/weather icons/cloudy-day.png");
/* harmony import */ var _assets_weather_icons_cloudy_night_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/weather icons/cloudy-night.png */ "./src/assets/weather icons/cloudy-night.png");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './assets/weather icons/sun.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _assets_weather_icons_moon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/weather icons/moon.png */ "./src/assets/weather icons/moon.png");
/* harmony import */ var _assets_weather_icons_raining_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/weather icons/raining.png */ "./src/assets/weather icons/raining.png");
/* harmony import */ var _assets_weather_icons_snowflake_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/weather icons/snowflake.png */ "./src/assets/weather icons/snowflake.png");
/* harmony import */ var _assets_weather_icons_storm_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/weather icons/storm.png */ "./src/assets/weather icons/storm.png");
/* harmony import */ var _assets_weather_icons_wind_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/weather icons/wind.png */ "./src/assets/weather icons/wind.png");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helper */ "./src/helper.js");













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
    const localDateTime = (0,_helper__WEBPACK_IMPORTED_MODULE_11__.formatTime)(data.datetime, data.timezone);
    const dayTime = (0,_helper__WEBPACK_IMPORTED_MODULE_11__.isDayTime)(
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
    weatherElement.textContent = `${(0,_helper__WEBPACK_IMPORTED_MODULE_11__.capitalize)(data.weather)}`;
    tempElement.textContent =
      units === 'metric'
        ? `${data.temperature} °C`
        : `${(0,_helper__WEBPACK_IMPORTED_MODULE_11__.convertToF)(data.temperature)} °F`;
    feelsLikeElement.textContent =
      units === 'metric'
        ? `${data.feelslike} °C`
        : `${(0,_helper__WEBPACK_IMPORTED_MODULE_11__.convertToF)(data.feelslike)} °F`;
    humidityElement.textContent = `${data.humidity} %`;
    windSpeedElement.textContent =
      units === 'metric'
        ? `${data.windspeed} m/s`
        : `${(0,_helper__WEBPACK_IMPORTED_MODULE_11__.convertToMPH)(data.windspeed)} mph`;
    dateTimeElement.textContent = localDateTime;
    weatherImg.src = getWeatherIcon(data.id, dayTime);
  }
  function getWeatherIcon(id, day) {
    const conditionID = parseInt(id);
    let weather;
    if (conditionID >= 200 && conditionID < 300) {
      // weather = 'Thunderstorm';
      return _assets_weather_icons_storm_png__WEBPACK_IMPORTED_MODULE_9__;
    } else if (conditionID >= 300 && conditionID < 600) {
      // weather = 'Rain';
      return _assets_weather_icons_raining_png__WEBPACK_IMPORTED_MODULE_7__;
    } else if (conditionID >= 600 && conditionID < 700) {
      // weather = 'Snow';
      return _assets_weather_icons_snowflake_png__WEBPACK_IMPORTED_MODULE_8__;
    } else if (conditionID >= 700 && conditionID < 800) {
      // weather = 'Atmosphere';
      return _assets_weather_icons_wind_png__WEBPACK_IMPORTED_MODULE_10__;
    } else if (conditionID > 800 && conditionID < 900) {
      // weather = 'Cloud';
      if (day) {
        return _assets_weather_icons_cloudy_day_png__WEBPACK_IMPORTED_MODULE_3__;
      } else return _assets_weather_icons_cloudy_night_png__WEBPACK_IMPORTED_MODULE_4__;
    } else if (conditionID == 800) {
      // weather = 'Clear';
      if (day) {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module './assets/weather icons/sun.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      } else return _assets_weather_icons_moon_png__WEBPACK_IMPORTED_MODULE_6__;
    }
  }

  function changeBackground(day) {
    if (day) {
      mainElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${_assets_background_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
    } else {
      mainElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${_assets_night_background_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
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




/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adc84603b3f1afdc0397.jpg";

/***/ }),

/***/ "./src/assets/night-background.jpg":
/*!*****************************************!*\
  !*** ./src/assets/night-background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a33906e7b775ad6e7fa.jpg";

/***/ }),

/***/ "./src/assets/weather icons/cloudy-day.png":
/*!*************************************************!*\
  !*** ./src/assets/weather icons/cloudy-day.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0ad5274896691eff944.png";

/***/ }),

/***/ "./src/assets/weather icons/cloudy-night.png":
/*!***************************************************!*\
  !*** ./src/assets/weather icons/cloudy-night.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60198ebce4e199ceba51.png";

/***/ }),

/***/ "./src/assets/weather icons/moon.png":
/*!*******************************************!*\
  !*** ./src/assets/weather icons/moon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88a4bd37bf8444777eb5.png";

/***/ }),

/***/ "./src/assets/weather icons/raining.png":
/*!**********************************************!*\
  !*** ./src/assets/weather icons/raining.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2af3473347d2e86e7244.png";

/***/ }),

/***/ "./src/assets/weather icons/snowflake.png":
/*!************************************************!*\
  !*** ./src/assets/weather icons/snowflake.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a91fac22d6c15a980b81.png";

/***/ }),

/***/ "./src/assets/weather icons/storm.png":
/*!********************************************!*\
  !*** ./src/assets/weather icons/storm.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "264342493418f806bae9.png";

/***/ }),

/***/ "./src/assets/weather icons/wind.png":
/*!*******************************************!*\
  !*** ./src/assets/weather icons/wind.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3dae553ea9565206cc3.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxpRUFBWTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmOEM7O0FBRTlDLGtFQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zyb21Vbml4VGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRUaW1lL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL0FQSWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZnJvbVVuaXhUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpLiBEZWNpbWFsIHZhbHVlcyB3aWxsIGJlIGRpc2NhcmRlZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB1bml4VGltZSAtIHRoZSBnaXZlbiBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcylcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSB0aGUgZGF0ZSAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogY29uc3QgcmVzdWx0ID0gZnJvbVVuaXhUaW1lKDEzMzA1MTU5MDUpXG4gKiAvLz0+IFdlZCBGZWIgMjkgMjAxMiAxMTo0NTowNVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyb21Vbml4VGltZShkaXJ0eVVuaXhUaW1lKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgdW5peFRpbWUgPSB0b0ludGVnZXIoZGlydHlVbml4VGltZSk7XG4gIHJldHVybiB0b0RhdGUodW5peFRpbWUgKiAxMDAwKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBtaWxsaXNlY29uZHMgdGltZXN0YW1wIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBtaWxsaXNlY29uZHMgdGltZXN0YW1wIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgdGltZXN0YW1wXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gR2V0IHRoZSB0aW1lc3RhbXAgb2YgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNS4xMjM6XG4gKiBjb25zdCByZXN1bHQgPSBnZXRUaW1lKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUsIDUsIDEyMykpXG4gKiAvLz0+IDEzMzA1MTU5MDUxMjNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICByZXR1cm4gdGltZXN0YW1wO1xufSIsImltcG9ydCBnZXRUaW1lIGZyb20gXCIuLi9nZXRUaW1lL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRVbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIHNlY29uZHMgdGltZXN0YW1wIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHRpbWVzdGFtcFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgdGltZXN0YW1wIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDUgQ0VUOlxuICogY29uc3QgcmVzdWx0ID0gZ2V0VW5peFRpbWUobmV3IERhdGUoMjAxMiwgMSwgMjksIDExLCA0NSwgNSkpXG4gKiAvLz0+IDEzMzA1MTIzMDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVbml4VGltZShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBNYXRoLmZsb29yKGdldFRpbWUoZGlydHlEYXRlKSAvIDEwMDApO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGZvcm1hdCwgZ2V0VW5peFRpbWUgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IEFQSWtleSA9ICcxY2Q3YTUzYTAyN2U1MGFhMmVjN2YzNGM1MWI2ZGIxNSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSWtleX0mdW5pdHM9bWV0cmljYFxuICAgICk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXNwb25zZSBub3Qgb2snKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBjaXR5bmFtZTogZGF0YS5uYW1lLFxuICAgICAgaWQ6IGRhdGEud2VhdGhlclswXS5pZCxcbiAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICB0ZW1wZXJhdHVyZTogZGF0YS5tYWluLnRlbXAsXG4gICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgZmVlbHNsaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgIHRlbXBtaW46IGRhdGEubWFpbi50ZW1wX21pbixcbiAgICAgIHRlbXBtYXg6IGRhdGEubWFpbi50ZW1wX21heCxcbiAgICAgIHdpbmRzcGVlZDogZGF0YS53aW5kLnNwZWVkLFxuICAgICAgZGF0ZXRpbWU6IGdldFVuaXhUaW1lKG5ldyBEYXRlKCkpLFxuICAgICAgdGltZXpvbmU6IGRhdGEudGltZXpvbmUsXG4gICAgICBzdW5yaXNlOiBkYXRhLnN5cy5zdW5yaXNlLFxuICAgICAgc3Vuc2V0OiBkYXRhLnN5cy5zdW5zZXQsXG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9O1xuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEgfSBmcm9tICcuL0FQSWNvbnRyb2wnO1xuaW1wb3J0IGRheUJHIGZyb20gJy4vYXNzZXRzL2JhY2tncm91bmQuanBnJztcbmltcG9ydCBuaWdodEJHIGZyb20gJy4vYXNzZXRzL25pZ2h0LWJhY2tncm91bmQuanBnJztcbmltcG9ydCBjbG91ZHlEYXkgZnJvbSAnLi9hc3NldHMvd2VhdGhlciBpY29ucy9jbG91ZHktZGF5LnBuZyc7XG5pbXBvcnQgY2xvdWR5TmlnaHQgZnJvbSAnLi9hc3NldHMvd2VhdGhlciBpY29ucy9jbG91ZHktbmlnaHQucG5nJztcbmltcG9ydCBzdW4gZnJvbSAnLi9hc3NldHMvd2VhdGhlciBpY29ucy9zdW4ucG5nJztcbmltcG9ydCBtb29uIGZyb20gJy4vYXNzZXRzL3dlYXRoZXIgaWNvbnMvbW9vbi5wbmcnO1xuaW1wb3J0IHJhaW5pbmcgZnJvbSAnLi9hc3NldHMvd2VhdGhlciBpY29ucy9yYWluaW5nLnBuZyc7XG5pbXBvcnQgc25vd2ZhbGwgZnJvbSAnLi9hc3NldHMvd2VhdGhlciBpY29ucy9zbm93Zmxha2UucG5nJztcbmltcG9ydCBzdG9ybSBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyIGljb25zL3N0b3JtLnBuZyc7XG5pbXBvcnQgd2luZCBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyIGljb25zL3dpbmQucG5nJztcbmltcG9ydCB7XG4gIGZvcm1hdFRpbWUsXG4gIGNhcGl0YWxpemUsXG4gIGlzRGF5VGltZSxcbiAgY29udmVydFRvRixcbiAgY29udmVydFRvTVBILFxufSBmcm9tICcuL2hlbHBlcic7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKTtcbiAgY29uc3QgY2l0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuICBjb25zdCB3ZWF0aGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyJyk7XG4gIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbiAgY29uc3QgZmVlbHNMaWtlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlJyk7XG4gIGNvbnN0IGh1bWlkaXR5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuICBjb25zdCB3aW5kU3BlZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcbiAgY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWljb24nKTtcbiAgY29uc3QgZGF0ZVRpbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtdGltZScpO1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGNvbnN0IGNoYW5nZVVuaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdC1idG4nKTtcbiAgY29uc3Qgd2FybmluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybmluZycpO1xuICBsZXQgY3VycmVudFNlYXJjaCA9ICdTaW5nYXBvcmUnO1xuICBsZXQgY3VycmVudFdlYXRoZXJEYXRhO1xuICBsZXQgdW5pdHMgPSAnbWV0cmljJztcblxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dFZhbCA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGlmICghaW5wdXRWYWwpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShpbnB1dFZhbCk7XG4gICAgICBpZiAod2VhdGhlckRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgd2FybmluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRTZWFyY2ggPSBpbnB1dFZhbDtcbiAgICAgICAgY3VycmVudFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0U2VhcmNoJywgY3VycmVudFNlYXJjaCk7XG4gICAgICAgIHdhcm5pbmdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgdmlld1dlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgY2hhbmdlVW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoKTtcbiAgICBpZiAodW5pdHMgPT09ICdtZXRyaWMnKSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdNZXRyaWMnO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VuaXRzJywgJ21ldHJpYycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdJbXBlcmlhbCc7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5pdHMnLCAnaW1wZXJpYWwnKTtcbiAgICB9XG4gICAgdmlld1dlYXRoZXIoY3VycmVudFdlYXRoZXJEYXRhKTtcbiAgfSk7XG4gIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXN0U2VhcmNoJykgIT09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRTZWFyY2ggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdFNlYXJjaCcpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuaXRzJykgIT09IG51bGwpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5pdHMnKSA9PT0gJ2ltcGVyaWFsJykge1xuICAgICAgICBjaGFuZ2VVbml0cygpO1xuICAgICAgICBjaGFuZ2VVbml0QnRuLnRleHRDb250ZW50ID0gJ0ltcGVyaWFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZVVuaXRCdG4udGV4dENvbnRlbnQgPSAnTWV0cmljJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbmdlVW5pdEJ0bi50ZXh0Q29udGVudCA9ICdNZXRyaWMnO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGN1cnJlbnRTZWFyY2gpO1xuICAgIGN1cnJlbnRXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhO1xuICAgIHZpZXdXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgfVxuICBmdW5jdGlvbiB2aWV3V2VhdGhlcihkYXRhKSB7XG4gICAgY29uc3QgbG9jYWxEYXRlVGltZSA9IGZvcm1hdFRpbWUoZGF0YS5kYXRldGltZSwgZGF0YS50aW1lem9uZSk7XG4gICAgY29uc3QgZGF5VGltZSA9IGlzRGF5VGltZShcbiAgICAgIGRhdGEuZGF0ZXRpbWUsXG4gICAgICBkYXRhLnN1bnJpc2UsXG4gICAgICBkYXRhLnN1bnNldCxcbiAgICAgIGRhdGEudGltZXpvbmVcbiAgICApO1xuICAgIGNoYW5nZUJhY2tncm91bmQoZGF5VGltZSk7XG4gICAgaWYgKHR5cGVvZiBkYXRhLmNvdW50cnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eW5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2l0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHluYW1lfSwgJHtkYXRhLmNvdW50cnl9YDtcbiAgICB9XG4gICAgd2VhdGhlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjYXBpdGFsaXplKGRhdGEud2VhdGhlcil9YDtcbiAgICB0ZW1wRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICB1bml0cyA9PT0gJ21ldHJpYydcbiAgICAgICAgPyBgJHtkYXRhLnRlbXBlcmF0dXJlfSDCsENgXG4gICAgICAgIDogYCR7Y29udmVydFRvRihkYXRhLnRlbXBlcmF0dXJlKX0gwrBGYDtcbiAgICBmZWVsc0xpa2VFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgIHVuaXRzID09PSAnbWV0cmljJ1xuICAgICAgICA/IGAke2RhdGEuZmVlbHNsaWtlfSDCsENgXG4gICAgICAgIDogYCR7Y29udmVydFRvRihkYXRhLmZlZWxzbGlrZSl9IMKwRmA7XG4gICAgaHVtaWRpdHlFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0gJWA7XG4gICAgd2luZFNwZWVkRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICB1bml0cyA9PT0gJ21ldHJpYydcbiAgICAgICAgPyBgJHtkYXRhLndpbmRzcGVlZH0gbS9zYFxuICAgICAgICA6IGAke2NvbnZlcnRUb01QSChkYXRhLndpbmRzcGVlZCl9IG1waGA7XG4gICAgZGF0ZVRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gbG9jYWxEYXRlVGltZTtcbiAgICB3ZWF0aGVySW1nLnNyYyA9IGdldFdlYXRoZXJJY29uKGRhdGEuaWQsIGRheVRpbWUpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKGlkLCBkYXkpIHtcbiAgICBjb25zdCBjb25kaXRpb25JRCA9IHBhcnNlSW50KGlkKTtcbiAgICBsZXQgd2VhdGhlcjtcbiAgICBpZiAoY29uZGl0aW9uSUQgPj0gMjAwICYmIGNvbmRpdGlvbklEIDwgMzAwKSB7XG4gICAgICAvLyB3ZWF0aGVyID0gJ1RodW5kZXJzdG9ybSc7XG4gICAgICByZXR1cm4gc3Rvcm07XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25JRCA+PSAzMDAgJiYgY29uZGl0aW9uSUQgPCA2MDApIHtcbiAgICAgIC8vIHdlYXRoZXIgPSAnUmFpbic7XG4gICAgICByZXR1cm4gcmFpbmluZztcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbklEID49IDYwMCAmJiBjb25kaXRpb25JRCA8IDcwMCkge1xuICAgICAgLy8gd2VhdGhlciA9ICdTbm93JztcbiAgICAgIHJldHVybiBzbm93ZmFsbDtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbklEID49IDcwMCAmJiBjb25kaXRpb25JRCA8IDgwMCkge1xuICAgICAgLy8gd2VhdGhlciA9ICdBdG1vc3BoZXJlJztcbiAgICAgIHJldHVybiB3aW5kO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uSUQgPiA4MDAgJiYgY29uZGl0aW9uSUQgPCA5MDApIHtcbiAgICAgIC8vIHdlYXRoZXIgPSAnQ2xvdWQnO1xuICAgICAgaWYgKGRheSkge1xuICAgICAgICByZXR1cm4gY2xvdWR5RGF5O1xuICAgICAgfSBlbHNlIHJldHVybiBjbG91ZHlOaWdodDtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbklEID09IDgwMCkge1xuICAgICAgLy8gd2VhdGhlciA9ICdDbGVhcic7XG4gICAgICBpZiAoZGF5KSB7XG4gICAgICAgIHJldHVybiBzdW47XG4gICAgICB9IGVsc2UgcmV0dXJuIG1vb247XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZChkYXkpIHtcbiAgICBpZiAoZGF5KSB7XG4gICAgICBtYWluRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSAsdXJsKCR7ZGF5Qkd9KWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1haW5FbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpICx1cmwoJHtuaWdodEJHfSlgO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVVuaXRzKCkge1xuICAgIGlmICh1bml0cyA9PT0gJ21ldHJpYycpIHtcbiAgICAgIHVuaXRzID0gJ2ltcGVyaWFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSAnbWV0cmljJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgaW5pdGlhbGlzZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCBmcm9tVW5peFRpbWUgZnJvbSAnZGF0ZS1mbnMvZnJvbVVuaXhUaW1lJztcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5mdW5jdGlvbiBpc0RheVRpbWUodGltZSwgc3VucmlzZSwgc3Vuc2V0LCBvZmZzZXQpIHtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBnZXRUaW1lT25seSh0aW1lLCBvZmZzZXQpO1xuICBjb25zdCBzdW5yaXNlVGltZSA9IGdldFRpbWVPbmx5KHN1bnJpc2UsIG9mZnNldCk7XG4gIGNvbnN0IHN1bnNldFRpbWUgPSBnZXRUaW1lT25seShzdW5zZXQsIG9mZnNldCk7XG4gIGlmIChjdXJyZW50VGltZSA+PSBzdW5yaXNlVGltZSAmJiBjdXJyZW50VGltZSA8IHN1bnNldFRpbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lLCBvZmZzZXQpIHtcbiAgcmV0dXJuIGZyb21Vbml4VGltZSh0aW1lICsgb2Zmc2V0KVxuICAgIC50b1VUQ1N0cmluZygpXG4gICAgLnNsaWNlKDAsIDIyKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZU9ubHkodGltZSwgb2Zmc2V0KSB7XG4gIHJldHVybiBmb3JtYXRUaW1lKHRpbWUsIG9mZnNldCkuc2xpY2UoLTUpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9GKHRlbXApIHtcbiAgY29uc3QgY2VsY2l1cyA9ICt0ZW1wO1xuICBjb25zdCBmYWhyZW5oZWl0ID0gY2VsY2l1cyAqICg5IC8gNSkgKyAzMjtcbiAgcmV0dXJuICtmYWhyZW5oZWl0LnRvRml4ZWQoMik7XG59XG5mdW5jdGlvbiBjb252ZXJ0VG9NUEgoc3BlZWQpIHtcbiAgY29uc3QgbWV0ZXJwcyA9ICtzcGVlZDtcbiAgY29uc3QgbXBoID0gbWV0ZXJwcyAqIDIuMjM3O1xuICByZXR1cm4gK21waC50b0ZpeGVkKDIpO1xufVxuXG5leHBvcnQge1xuICBjYXBpdGFsaXplLFxuICBpc0RheVRpbWUsXG4gIGZvcm1hdFRpbWUsXG4gIGdldFRpbWVPbmx5LFxuICBjb252ZXJ0VG9GLFxuICBjb252ZXJ0VG9NUEgsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tICcuL2Rpc3BsYXknO1xuXG5kaXNwbGF5Q29udHJvbGxlci5pbml0aWFsaXNlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=