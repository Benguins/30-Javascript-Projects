import {city, temp, humidity, wind, weatherIcon, weather, error} from "./dom-calls.js";
import { EventListeners } from "./event-listeners.js";

export const App = (() => {
  const apiKey = 'fd84a0dc65ea8921d8dee11eb042927f';
  const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  async function checkWeather(param){
    const response = await fetch(apiURL + param + `&appid=${apiKey}`);
    const data = await response.json();

    if(response.status == 404){
      error.style.display = 'block';
      weather.style.display = 'none';
    } else {
      city.innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp) + '°c';
      humidity.innerHTML = data.main.humidity + '%';
      wind.innerHTML = data.wind.speed + ' km/h';
  
      if(data.weather[0].main === 'Clouds'){
        weatherIcon.src='./images/clouds.png'
      } else if(data.weather[0].main === 'Clear'){
        weatherIcon.src='./images/clear.png'
      } else if(data.weather[0].main === 'Rain'){
        weatherIcon.src='./images/rain.png'
      } else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src='./images/drizzle.png'
      } else if(data.weather[0].main === 'Mist'){
        weatherIcon.src='./images/mist.png'
      }
      
      weather.style.display = 'block';
      error.style.display = 'none';
    }
  }

  return {
    checkWeather
  }
})();

App.checkWeather();
EventListeners.returnEventListeners();









