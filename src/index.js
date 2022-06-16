const APIkey = '1cd7a53a027e50aa2ec7f34c51b6db15';
let UNITS = 'metric';

const getWeather = function (city) {
  fetch(
    `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${APIkey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = response.json();
      console.log(data);
      return data;
    })
    .then((data) => {
      console.log('Success');
      console.log(data.weather[0]);
    })
    .catch((error) => console.log(error));
};

getWeather('Singapore');
