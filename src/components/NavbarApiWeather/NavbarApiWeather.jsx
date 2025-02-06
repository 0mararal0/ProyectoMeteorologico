import React, { useState } from "react";

export const NavbarApiWeather = ({ onSearch }) => {
  const [text, setText] = useState("");
  const [mss, setMss] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    if (text) {
      setMss("");
      onSearch(text);
      setText("");
    } else {
      setMss("Introduce una ciudad");
    }
  };

  return (
    <div>
      <h1>Pronóstico Metereológico</h1>
      <form action="">
        <label htmlFor="">
          Ciudad
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            onChange={handleChange}
            value={text}
          />
        </label>
        <p>{mss}</p>
        <button type="button" onClick={handleSearch}>
          Buscar
        </button>
      </form>
    </div>
  );
};
