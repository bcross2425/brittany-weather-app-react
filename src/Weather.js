import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "c819171fe0abdc14039af4ef5dda283b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container c1">
          <div
            className="card"
            style={{
              width: "48rem",
              display: "block",
              margin: "auto",
              marginTop: "10%",
            }}
          >
            <div className="card-body">
              <form id="search-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="enter a city"
                      id="search-city"
                      autoComplete="off"
                      autoFocus="off"
                      style={{ boxShadow: "none" }}
                      onChange={handleCityChange}
                    />
                  </div>

                  <div className="col-2">
                    <input
                      id="search-button"
                      className="btn btn-primary me-3"
                      type="submit"
                      value="🔎 "
                    />
                    <button
                      type="button"
                      id="location-button"
                      className="btn btn-outline-secondary"
                    >
                      📍
                    </button>
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
