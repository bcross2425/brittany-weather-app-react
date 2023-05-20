import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: "",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
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
              <form id="search-form">
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
              <div className="row">
                <div className="col box weather-temperature">
                  <img src={weatherData.icon} id="icon" alt="Weather Icon" />
                  <span className="daily-temp" id="temp">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="degrees"> °F </span>

                  <ul id="daily-percent">
                    <li>
                      🌀 Wind <span id="wind"></span> {weatherData.wind} mph
                    </li>
                    <li>
                      🌡️💧Humidity{" "}
                      <span id="humidity">{weatherData.humidity}</span> %
                    </li>
                  </ul>
                </div>

                <div className="col box">
                  <h1>{weatherData.city}</h1>
                  <p className="date">
                    <FormattedDate date={weatherData.date} />
                  </p>
                  <p className="temp-sky text-capitalize">
                    {weatherData.description}
                  </p>
                </div>
                <hr style={{ width: "90%" }} />
                <div className="row weather-report" id="forecast"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c819171fe0abdc14039af4ef5dda283b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
