import fromUnixTime from 'date-fns/fromUnixTime';
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
  return fromUnixTime(time + offset)
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

export {
  capitalize,
  isDayTime,
  formatTime,
  getTimeOnly,
  convertToF,
  convertToMPH,
};
