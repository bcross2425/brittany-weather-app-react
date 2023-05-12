import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, citySearch] = useState("");
  let [forecast, showForecast] = useState("");

  function setTemperature(response) {
    showForecast(
      <div>
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)}°F</li>
          <li>Description:{response.data.weather[0].description}</li>
          <li>Humidity:{response.data.main.humidity}%</li>
          <li>Wind:{response.data.wind.speed} m/s</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="Weather Forecast"
            />
          </li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `64469ac67e6dc941feb5b50915a18dc7`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(setTemperature);
  }

  function searchCity(event) {
    citySearch(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type a city" onChange={searchCity} />
      <input type="submit" value="search" />
      <h2> {forecast} </h2>
    </form>
  );
}
