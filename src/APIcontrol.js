const APIkey = '1cd7a53a027e50aa2ec7f34c51b6db15';
let UNITS = 'metric';

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=${UNITS}`
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
    };
    return obj;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getWeatherData };
