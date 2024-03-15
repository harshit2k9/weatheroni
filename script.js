const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b20b45c153msh5311935b76131c0p14f14ejsn77101d7fc43c',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather = (city) => {
   cityName.innerHTML = city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct + "%";
      feels_like.innerHTML = response.feels_like + "°C";
      humidity.innerHTML = response.humidity + "%";
      max_temp.innerHTML = response.max_temp + "°C";
      min_temp.innerHTML = response.min_temp + "°C";
      //sunrise.innerHTML = response.sunrise;
      //sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp + "°C";
      wind_degrees.innerHTML = response.wind_degrees + "°";
      wind_speed.innerHTML = response.wind_speed + " km/hr";
    })
  .catch(err => console.error(err));
}  

submit.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(city.value)
})

info.addEventListener("click", (e) => {
  e.preventDefault()
  open("/weatheroni/info.html", "self")
})

feedback.addEventListener("click", (e) => {
  e.preventDefault()
  open("/weatheroni/info.html", "self")
})
