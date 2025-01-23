// src/weather-modules/WeatherModule.jsx
import React, { useState } from "react";
import "./WeatherModuleStyle.css";

// Simulated fake API response with multiple weather entries
const mockAPIResponse = [
  {
    city: "Tokyo",
    temperature: "18°C",
    description: "Clear Skies",
    humidity: "70%",
    wind: "8 km/h",
  },
  {
    city: "New York",
    temperature: "12°C",
    description: "Partly Cloudy",
    humidity: "65%",
    wind: "10 km/h",
  },
  {
    city: "Paris",
    temperature: "20°C",
    description: "Sunny",
    humidity: "50%",
    wind: "5 km/h",
  },
  {
    city: "Sydney",
    temperature: "25°C",
    description: "Rainy",
    humidity: "80%",
    wind: "15 km/h",
  },
];

function WeatherModule() {
  const [weather, setWeather] = useState(null);
  const [index, setIndex] = useState(0);

  const fetchNextWeather = () => {
    setWeather(mockAPIResponse[index]);
    setIndex((prevIndex) => (prevIndex + 1) % mockAPIResponse.length); // Cycle through data
  };

  return (
    <div className="weather-module">
      <h1>Weather Tracker</h1>
      <button onClick={fetchNextWeather}>Fetch Weather</button>
      {weather ? (
        <div className="weather-details">
          <h2>{weather.city}</h2>
          <p>Temperature: {weather.temperature}</p>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind: {weather.wind}</p>
        </div>
      ) : (
        <p>Click the button to fetch weather data!</p>
      )}
    </div>
  );
}

export default WeatherModule;
