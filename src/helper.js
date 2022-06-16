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

export { capitalize, isDayTime, formatTime, getTimeOnly };
