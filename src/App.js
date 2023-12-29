import './App.css';
import React, { useState, useEffect } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="wrapper">
      {countries.map((country) => (
        <div key={country.cca3} className="styleCard">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="cardImg"
          />
          <h2 className="cardText">{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}