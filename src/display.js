import { getWeatherData } from './APIcontrol';
import dayBG from './assets/background.jpg';
import nightBG from './assets/night-background.jpg';
import cloudyDay from './assets/weather icons/cloudy-day.png';
import cloudyNight from './assets/weather icons/cloudy-night.png';
import sun from './assets/weather icons/sun.png';
import moon from './assets/weather icons/moon.png';
import raining from './assets/weather icons/raining.png';
import snowfall from './assets/weather icons/snowflake.png';
import storm from './assets/weather icons/storm.png';
import wind from './assets/weather icons/wind.png';
import {
  formatTime,
  capitalize,
  isDayTime,
  convertToF,
  convertToMPH,
} from './helper';

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
      const weatherData = await getWeatherData(inputVal);
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
    const weatherData = await getWeatherData(currentSearch);
    currentWeatherData = weatherData;
    viewWeather(weatherData);
  }
  function viewWeather(data) {
    const localDateTime = formatTime(data.datetime, data.timezone);
    const dayTime = isDayTime(
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
    weatherElement.textContent = `${capitalize(data.weather)}`;
    tempElement.textContent =
      units === 'metric'
        ? `${data.temperature} °C`
        : `${convertToF(data.temperature)} °F`;
    feelsLikeElement.textContent =
      units === 'metric'
        ? `${data.feelslike} °C`
        : `${convertToF(data.feelslike)} °F`;
    humidityElement.textContent = `${data.humidity} %`;
    windSpeedElement.textContent =
      units === 'metric'
        ? `${data.windspeed} m/s`
        : `${convertToMPH(data.windspeed)} mph`;
    dateTimeElement.textContent = localDateTime;
    weatherImg.src = getWeatherIcon(data.id, dayTime);
  }
  function getWeatherIcon(id, day) {
    const conditionID = parseInt(id);
    let weather;
    if (conditionID >= 200 && conditionID < 300) {
      // weather = 'Thunderstorm';
      return storm;
    } else if (conditionID >= 300 && conditionID < 600) {
      // weather = 'Rain';
      return raining;
    } else if (conditionID >= 600 && conditionID < 700) {
      // weather = 'Snow';
      return snowfall;
    } else if (conditionID >= 700 && conditionID < 800) {
      // weather = 'Atmosphere';
      return wind;
    } else if (conditionID > 800 && conditionID < 900) {
      // weather = 'Cloud';
      if (day) {
        return cloudyDay;
      } else return cloudyNight;
    } else if (conditionID == 800) {
      // weather = 'Clear';
      if (day) {
        return sun;
      } else return moon;
    }
  }

  function changeBackground(day) {
    if (day) {
      mainElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${dayBG})`;
    } else {
      mainElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${nightBG})`;
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

export { displayController };
