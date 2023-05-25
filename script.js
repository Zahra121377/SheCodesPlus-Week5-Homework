

function show(response) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = `${days[now.getDay()]} ${now
    .getHours()
    .toString()
    .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
  let showCity = document.querySelector("#showCity");
  let showDateHumidity = document.querySelector("#showDateHumidity");
  let showWeatherWind = document.querySelector("#showWeatherWind");
  let showTemp = document.querySelector("#showTemp");
  showCity.innerHTML = response.data.name;
  showDateHumidity.innerHTML = `${date}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Humidity: ${response.data.main.humidity}%`;
  showWeatherWind.innerHTML = `${response.data.weather[0].description}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Wind: ${response.data.wind.speed} miles/hour`;
  showTemp.innerHTML = response.data.main.temp + " °c";
}
function searchName(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city").value;
  let apiKey = "b2d9fa1f2b35557e4615dd5fab218834";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(show);
}
function searchCurrent() {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "b2d9fa1f2b35557e4615dd5fab218834";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(show);
  });
}
let submit = document.querySelector("#search");
submit.addEventListener("submit", searchName);
let button = document.querySelector("#current");
button.addEventListener("click", searchCurrent);
