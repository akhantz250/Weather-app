import { getWeatherData } from './APIcontrol';
import { capitalize } from './helper';
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

  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputVal = searchInput.value;
    if (!inputVal) {
      alert('no val');
    } else {
      const weatherData = await getWeatherData(inputVal);
      if (weatherData === null) {
        alert('cannot find');
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
    cityElement.textContent = `${data.cityname}, ${data.country}`;
    weatherElement.textContent = `${capitalize(data.weather)}`;
    tempElement.textContent = `${data.temperature} °C`;
    feelsLikeElement.textContent = `${data.feelslike} °C`;
    humidityElement.textContent = `${data.humidity} %`;
    windSpeedElement.textContent = `${data.windspeed} m/s`;
    console.log(data.id);
  }
  return { initialise };
})();

export { displayController };
