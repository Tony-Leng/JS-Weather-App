console.log('connected!');

const apiKey = "1535a41b848c877b2ff26535fb337d63";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=tokyo";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();
