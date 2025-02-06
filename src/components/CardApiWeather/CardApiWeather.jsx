import React from "react";
import "./CardApiWeather.css";

export const CardApiWheather = ({ data }) => {
  const fecha = data.dt_txt.slice(0, -9);

  return (
    <div className="containerCard">
      <div className="contenidoCard">
        <div className="textCard">
          <p>
            <strong>Día</strong> {fecha}
          </p>
          <p>
            <strong>Temperatura:</strong> {Math.trunc(data.main.temp - 273.15)}
            ªC
          </p>

          <p>
            <strong>Humedad</strong> {data.main.humidity}%
          </p>

          <img
            src={` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt=""
            className="coat"
          />
        </div>
      </div>
    </div>
  );
};
