import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    temperature: 70,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 50,
    wind: 10,
  };

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
                <img src={weatherData.imgUrl} id="icon" />
                <span className="daily-temp" id="temp">
                  {weatherData.temperature}
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
                <p className="date">{weatherData.date}</p>
                <p className="temp-sky">{weatherData.description}</p>
              </div>
              <hr style={{ width: "90%" }} />
              <div className="row weather-report" id="forecast"></div>
            </div>
          </div>
        </div>

        <p id="contact">
          <small>
            <a
              href="https://github.com/bcross2425/cross-weather-app"
              target="blank"
            >
              Open-source code
            </a>
            by Brittany Cross
          </small>
        </p>
      </div>
    </div>
  );
}
