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
/* harmony import */ var _assets_weather_icons_sun_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/weather icons/sun.png */ "./src/assets/weather icons/sun.png");
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
        return _assets_weather_icons_sun_png__WEBPACK_IMPORTED_MODULE_5__;
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

/***/ "./src/assets/weather icons/sun.png":
/*!******************************************!*\
  !*** ./src/assets/weather icons/sun.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0d935efd08120ee0fe2.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxpRUFBWTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNDRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZjhDOztBQUU5QyxrRUFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0VGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRVbml4VGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9BUEljb250cm9sLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWUgLSB0aGUgZ2l2ZW4gVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgdGhlIGRhdGUgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb21Vbml4VGltZSgxMzMwNTE1OTA1KVxuICogLy89PiBXZWQgRmViIDI5IDIwMTIgMTE6NDU6MDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9tVW5peFRpbWUoZGlydHlVbml4VGltZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHVuaXhUaW1lID0gdG9JbnRlZ2VyKGRpcnR5VW5peFRpbWUpO1xuICByZXR1cm4gdG9EYXRlKHVuaXhUaW1lICogMTAwMCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHRpbWVzdGFtcFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgdGltZXN0YW1wIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDUuMTIzOlxuICogY29uc3QgcmVzdWx0ID0gZ2V0VGltZShuZXcgRGF0ZSgyMDEyLCAxLCAyOSwgMTEsIDQ1LCA1LCAxMjMpKVxuICogLy89PiAxMzMwNTE1OTA1MTIzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgcmV0dXJuIHRpbWVzdGFtcDtcbn0iLCJpbXBvcnQgZ2V0VGltZSBmcm9tIFwiLi4vZ2V0VGltZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0VW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgc2Vjb25kcyB0aW1lc3RhbXAgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB0aW1lc3RhbXBcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIHRpbWVzdGFtcCBvZiAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1IENFVDpcbiAqIGNvbnN0IHJlc3VsdCA9IGdldFVuaXhUaW1lKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUsIDUpKVxuICogLy89PiAxMzMwNTEyMzA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VW5peFRpbWUoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gTWF0aC5mbG9vcihnZXRUaW1lKGRpcnR5RGF0ZSkgLyAxMDAwKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBmb3JtYXQsIGdldFVuaXhUaW1lIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBBUElrZXkgPSAnMWNkN2E1M2EwMjdlNTBhYTJlYzdmMzRjNTFiNmRiMTUnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElrZXl9JnVuaXRzPW1ldHJpY2BcbiAgICApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVzcG9uc2Ugbm90IG9rJyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgY2l0eW5hbWU6IGRhdGEubmFtZSxcbiAgICAgIGlkOiBkYXRhLndlYXRoZXJbMF0uaWQsXG4gICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgdGVtcGVyYXR1cmU6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIGZlZWxzbGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICB0ZW1wbWluOiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgICB0ZW1wbWF4OiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICB3aW5kc3BlZWQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgIGRhdGV0aW1lOiBnZXRVbml4VGltZShuZXcgRGF0ZSgpKSxcbiAgICAgIHRpbWV6b25lOiBkYXRhLnRpbWV6b25lLFxuICAgICAgc3VucmlzZTogZGF0YS5zeXMuc3VucmlzZSxcbiAgICAgIHN1bnNldDogZGF0YS5zeXMuc3Vuc2V0LFxuICAgIH07XG4gICAgcmV0dXJuIG9iajtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEgfTtcbiIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSAnLi9BUEljb250cm9sJztcbmltcG9ydCBkYXlCRyBmcm9tICcuL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZyc7XG5pbXBvcnQgbmlnaHRCRyBmcm9tICcuL2Fzc2V0cy9uaWdodC1iYWNrZ3JvdW5kLmpwZyc7XG5pbXBvcnQgY2xvdWR5RGF5IGZyb20gJy4vYXNzZXRzL3dlYXRoZXIgaWNvbnMvY2xvdWR5LWRheS5wbmcnO1xuaW1wb3J0IGNsb3VkeU5pZ2h0IGZyb20gJy4vYXNzZXRzL3dlYXRoZXIgaWNvbnMvY2xvdWR5LW5pZ2h0LnBuZyc7XG5pbXBvcnQgc3VuIGZyb20gJy4vYXNzZXRzL3dlYXRoZXIgaWNvbnMvc3VuLnBuZyc7XG5pbXBvcnQgbW9vbiBmcm9tICcuL2Fzc2V0cy93ZWF0aGVyIGljb25zL21vb24ucG5nJztcbmltcG9ydCByYWluaW5nIGZyb20gJy4vYXNzZXRzL3dlYXRoZXIgaWNvbnMvcmFpbmluZy5wbmcnO1xuaW1wb3J0IHNub3dmYWxsIGZyb20gJy4vYXNzZXRzL3dlYXRoZXIgaWNvbnMvc25vd2ZsYWtlLnBuZyc7XG5pbXBvcnQgc3Rvcm0gZnJvbSAnLi9hc3NldHMvd2VhdGhlciBpY29ucy9zdG9ybS5wbmcnO1xuaW1wb3J0IHdpbmQgZnJvbSAnLi9hc3NldHMvd2VhdGhlciBpY29ucy93aW5kLnBuZyc7XG5pbXBvcnQge1xuICBmb3JtYXRUaW1lLFxuICBjYXBpdGFsaXplLFxuICBpc0RheVRpbWUsXG4gIGNvbnZlcnRUb0YsXG4gIGNvbnZlcnRUb01QSCxcbn0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZvcm0nKTtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnRuJyk7XG4gIGNvbnN0IGNpdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbiAgY29uc3Qgd2VhdGhlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlcicpO1xuICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG4gIGNvbnN0IGZlZWxzTGlrZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZScpO1xuICBjb25zdCBodW1pZGl0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbiAgY29uc3Qgd2luZFNwZWVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkJyk7XG4gIGNvbnN0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1pY29uJyk7XG4gIGNvbnN0IGRhdGVUaW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLXRpbWUnKTtcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBjaGFuZ2VVbml0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuaXQtYnRuJyk7XG4gIGNvbnN0IHdhcm5pbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhcm5pbmcnKTtcbiAgbGV0IGN1cnJlbnRTZWFyY2ggPSAnU2luZ2Fwb3JlJztcbiAgbGV0IGN1cnJlbnRXZWF0aGVyRGF0YTtcbiAgbGV0IHVuaXRzID0gJ21ldHJpYyc7XG5cbiAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXRWYWwgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBpZiAoIWlucHV0VmFsKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoaW5wdXRWYWwpO1xuICAgICAgaWYgKHdlYXRoZXJEYXRhID09PSBudWxsKSB7XG4gICAgICAgIHdhcm5pbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50U2VhcmNoID0gaW5wdXRWYWw7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdFNlYXJjaCcsIGN1cnJlbnRTZWFyY2gpO1xuICAgICAgICB3YXJuaW5nRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIHZpZXdXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGNoYW5nZVVuaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNoYW5nZVVuaXRzKCk7XG4gICAgaWYgKHVuaXRzID09PSAnbWV0cmljJykge1xuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnTWV0cmljJztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bml0cycsICdtZXRyaWMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnSW1wZXJpYWwnO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VuaXRzJywgJ2ltcGVyaWFsJyk7XG4gICAgfVxuICAgIHZpZXdXZWF0aGVyKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG4gIH0pO1xuICBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXNlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdFNlYXJjaCcpICE9PSBudWxsKSB7XG4gICAgICBjdXJyZW50U2VhcmNoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RTZWFyY2gnKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bml0cycpICE9PSBudWxsKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VuaXRzJykgPT09ICdpbXBlcmlhbCcpIHtcbiAgICAgICAgY2hhbmdlVW5pdHMoKTtcbiAgICAgICAgY2hhbmdlVW5pdEJ0bi50ZXh0Q29udGVudCA9ICdJbXBlcmlhbCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VVbml0QnRuLnRleHRDb250ZW50ID0gJ01ldHJpYyc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5nZVVuaXRCdG4udGV4dENvbnRlbnQgPSAnTWV0cmljJztcbiAgICB9XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShjdXJyZW50U2VhcmNoKTtcbiAgICBjdXJyZW50V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YTtcbiAgICB2aWV3V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gIH1cbiAgZnVuY3Rpb24gdmlld1dlYXRoZXIoZGF0YSkge1xuICAgIGNvbnN0IGxvY2FsRGF0ZVRpbWUgPSBmb3JtYXRUaW1lKGRhdGEuZGF0ZXRpbWUsIGRhdGEudGltZXpvbmUpO1xuICAgIGNvbnN0IGRheVRpbWUgPSBpc0RheVRpbWUoXG4gICAgICBkYXRhLmRhdGV0aW1lLFxuICAgICAgZGF0YS5zdW5yaXNlLFxuICAgICAgZGF0YS5zdW5zZXQsXG4gICAgICBkYXRhLnRpbWV6b25lXG4gICAgKTtcbiAgICBjaGFuZ2VCYWNrZ3JvdW5kKGRheVRpbWUpO1xuICAgIGlmICh0eXBlb2YgZGF0YS5jb3VudHJ5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY2l0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHluYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNpdHlFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5bmFtZX0sICR7ZGF0YS5jb3VudHJ5fWA7XG4gICAgfVxuICAgIHdlYXRoZXJFbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y2FwaXRhbGl6ZShkYXRhLndlYXRoZXIpfWA7XG4gICAgdGVtcEVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgdW5pdHMgPT09ICdtZXRyaWMnXG4gICAgICAgID8gYCR7ZGF0YS50ZW1wZXJhdHVyZX0gwrBDYFxuICAgICAgICA6IGAke2NvbnZlcnRUb0YoZGF0YS50ZW1wZXJhdHVyZSl9IMKwRmA7XG4gICAgZmVlbHNMaWtlRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICB1bml0cyA9PT0gJ21ldHJpYydcbiAgICAgICAgPyBgJHtkYXRhLmZlZWxzbGlrZX0gwrBDYFxuICAgICAgICA6IGAke2NvbnZlcnRUb0YoZGF0YS5mZWVsc2xpa2UpfSDCsEZgO1xuICAgIGh1bWlkaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9ICVgO1xuICAgIHdpbmRTcGVlZEVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgdW5pdHMgPT09ICdtZXRyaWMnXG4gICAgICAgID8gYCR7ZGF0YS53aW5kc3BlZWR9IG0vc2BcbiAgICAgICAgOiBgJHtjb252ZXJ0VG9NUEgoZGF0YS53aW5kc3BlZWQpfSBtcGhgO1xuICAgIGRhdGVUaW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGxvY2FsRGF0ZVRpbWU7XG4gICAgd2VhdGhlckltZy5zcmMgPSBnZXRXZWF0aGVySWNvbihkYXRhLmlkLCBkYXlUaW1lKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRXZWF0aGVySWNvbihpZCwgZGF5KSB7XG4gICAgY29uc3QgY29uZGl0aW9uSUQgPSBwYXJzZUludChpZCk7XG4gICAgbGV0IHdlYXRoZXI7XG4gICAgaWYgKGNvbmRpdGlvbklEID49IDIwMCAmJiBjb25kaXRpb25JRCA8IDMwMCkge1xuICAgICAgLy8gd2VhdGhlciA9ICdUaHVuZGVyc3Rvcm0nO1xuICAgICAgcmV0dXJuIHN0b3JtO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uSUQgPj0gMzAwICYmIGNvbmRpdGlvbklEIDwgNjAwKSB7XG4gICAgICAvLyB3ZWF0aGVyID0gJ1JhaW4nO1xuICAgICAgcmV0dXJuIHJhaW5pbmc7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25JRCA+PSA2MDAgJiYgY29uZGl0aW9uSUQgPCA3MDApIHtcbiAgICAgIC8vIHdlYXRoZXIgPSAnU25vdyc7XG4gICAgICByZXR1cm4gc25vd2ZhbGw7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25JRCA+PSA3MDAgJiYgY29uZGl0aW9uSUQgPCA4MDApIHtcbiAgICAgIC8vIHdlYXRoZXIgPSAnQXRtb3NwaGVyZSc7XG4gICAgICByZXR1cm4gd2luZDtcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbklEID4gODAwICYmIGNvbmRpdGlvbklEIDwgOTAwKSB7XG4gICAgICAvLyB3ZWF0aGVyID0gJ0Nsb3VkJztcbiAgICAgIGlmIChkYXkpIHtcbiAgICAgICAgcmV0dXJuIGNsb3VkeURheTtcbiAgICAgIH0gZWxzZSByZXR1cm4gY2xvdWR5TmlnaHQ7XG4gICAgfSBlbHNlIGlmIChjb25kaXRpb25JRCA9PSA4MDApIHtcbiAgICAgIC8vIHdlYXRoZXIgPSAnQ2xlYXInO1xuICAgICAgaWYgKGRheSkge1xuICAgICAgICByZXR1cm4gc3VuO1xuICAgICAgfSBlbHNlIHJldHVybiBtb29uO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmQoZGF5KSB7XG4gICAgaWYgKGRheSkge1xuICAgICAgbWFpbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSkgLHVybCgke2RheUJHfSlgO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWluRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSAsdXJsKCR7bmlnaHRCR30pYDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VVbml0cygpIHtcbiAgICBpZiAodW5pdHMgPT09ICdtZXRyaWMnKSB7XG4gICAgICB1bml0cyA9ICdpbXBlcmlhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXRzID0gJ21ldHJpYyc7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGluaXRpYWxpc2UgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgZnJvbVVuaXhUaW1lIGZyb20gJ2RhdGUtZm5zL2Zyb21Vbml4VGltZSc7XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuZnVuY3Rpb24gaXNEYXlUaW1lKHRpbWUsIHN1bnJpc2UsIHN1bnNldCwgb2Zmc2V0KSB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gZ2V0VGltZU9ubHkodGltZSwgb2Zmc2V0KTtcbiAgY29uc3Qgc3VucmlzZVRpbWUgPSBnZXRUaW1lT25seShzdW5yaXNlLCBvZmZzZXQpO1xuICBjb25zdCBzdW5zZXRUaW1lID0gZ2V0VGltZU9ubHkoc3Vuc2V0LCBvZmZzZXQpO1xuICBpZiAoY3VycmVudFRpbWUgPj0gc3VucmlzZVRpbWUgJiYgY3VycmVudFRpbWUgPCBzdW5zZXRUaW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSwgb2Zmc2V0KSB7XG4gIHJldHVybiBmcm9tVW5peFRpbWUodGltZSArIG9mZnNldClcbiAgICAudG9VVENTdHJpbmcoKVxuICAgIC5zbGljZSgwLCAyMik7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVPbmx5KHRpbWUsIG9mZnNldCkge1xuICByZXR1cm4gZm9ybWF0VGltZSh0aW1lLCBvZmZzZXQpLnNsaWNlKC01KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvRih0ZW1wKSB7XG4gIGNvbnN0IGNlbGNpdXMgPSArdGVtcDtcbiAgY29uc3QgZmFocmVuaGVpdCA9IGNlbGNpdXMgKiAoOSAvIDUpICsgMzI7XG4gIHJldHVybiArZmFocmVuaGVpdC50b0ZpeGVkKDIpO1xufVxuZnVuY3Rpb24gY29udmVydFRvTVBIKHNwZWVkKSB7XG4gIGNvbnN0IG1ldGVycHMgPSArc3BlZWQ7XG4gIGNvbnN0IG1waCA9IG1ldGVycHMgKiAyLjIzNztcbiAgcmV0dXJuICttcGgudG9GaXhlZCgyKTtcbn1cblxuZXhwb3J0IHtcbiAgY2FwaXRhbGl6ZSxcbiAgaXNEYXlUaW1lLFxuICBmb3JtYXRUaW1lLFxuICBnZXRUaW1lT25seSxcbiAgY29udmVydFRvRixcbiAgY29udmVydFRvTVBILFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSAnLi9kaXNwbGF5JztcblxuZGlzcGxheUNvbnRyb2xsZXIuaW5pdGlhbGlzZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9