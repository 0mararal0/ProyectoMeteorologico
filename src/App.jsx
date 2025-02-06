import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_key } from "./services/apikeys";
import { NavbarApiWeather } from "./components/NavbarApiWeather/NavbarApiWeather";
import { CardApiWheather } from "./components/CardApiWeather/CardApiWeather";
import "./App.css";
import { Grafica } from "./components/Grafica/Grafica";

function App() {
  const [info, setInfo] = useState([]);
  const [city, setCity] = useState("valladolid");

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metrics&appid=${API_key}`
      )
      .then((res) => setInfo(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [city]);

  const onSearch = (text) => {
    if (text) {
      setCity(text.toLowerCase());
    }
  };

  const prov = info?.list?.filter((ele) =>
    ele?.dt_txt.slice(11, 13).includes("15")
  );

  return (
    <>
      <div className="d-flex flex-wrap container-ppal">
        <div className="navbar-ppal">
          <NavbarApiWeather onSearch={onSearch} />
        </div>
        <div className="container-body">
          <div className="title-ppal">
            <h1>
              Pronóstico del tiempo en <br />
              <span className="city">{info?.city?.name}</span>
            </h1>
          </div>
          <div className="container-cards">
            {info &&
              prov?.map((elem, idx) => {
                return <CardApiWheather key={idx} data={elem} />;
              })}
          </div>
          <div>
            <Grafica />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
