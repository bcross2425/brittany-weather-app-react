import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col box weather-temperature">
        <div className="d-flex align-items-center">
          {" "}
          <WeatherIcon code={props.data.icon} size={70} />
          <span className="daily-temp" id="temp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="degrees"> °F </span>
        </div>

        <ul id="daily-percent">
          <li>
            🌀 Wind <span id="wind"></span> {props.data.wind} mph
          </li>
          <li>
            🌡️💧Humidity <span id="humidity">{props.data.humidity}</span> %
          </li>
        </ul>
      </div>

      <div className="col box">
        <h1>{props.data.city}</h1>
        <p className="date">
          <FormattedDate date={props.data.date} />
        </p>
        <p className="temp-sky text-capitalize">{props.data.description}</p>
      </div>
      <hr />
      <div className="row weather-report" id="forecast"></div>
    </div>
  );
}
