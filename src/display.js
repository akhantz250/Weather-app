import { getWeatherData } from './APIcontrol';
import { formatTime, capitalize, isDayTime } from './helper';

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

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputVal = searchInput.value;
    if (!inputVal) {
      alert('Input is blank.');
    } else {
      const weatherData = await getWeatherData(inputVal);
      if (weatherData === null) {
        alert('City not found.');
        form.reset();
        return;
      } else {
        viewWeather(weatherData);
        form.reset();
      }
    }
  });
  async function initialise() {
    const weatherData = await getWeatherData('singapore');
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
    console.log('hi');
    changeBackground(dayTime);
    if (typeof data.country === 'undefined') {
      cityElement.textContent = `${data.cityname}`;
    } else {
      cityElement.textContent = `${data.cityname}, ${data.country}`;
    }
    weatherElement.textContent = `${capitalize(data.weather)}`;
    tempElement.textContent = `${data.temperature} °C`;
    feelsLikeElement.textContent = `${data.feelslike} °C`;
    humidityElement.textContent = `${data.humidity} %`;
    windSpeedElement.textContent = `${data.windspeed} m/s`;
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
      console.log(day);
    } else {
      mainElement.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('../dist/assets/night-background.jpg')";
      console.log('night');
    }
  }
  return { initialise };
})();

export { displayController };
