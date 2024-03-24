import { useState } from "react";
import { InputCityValue } from "./components/input";
import { WeatherComponent } from "./components/weatherComtent";
import "./app.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "203bdd9f0ef531d41c46a1a9583ca5e4";

  const handleSearch = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Invalid city name");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError("Invalid city name");
    }
  };

  return (
    <div className="wrapper">
      <div className="weather_blok">
        <InputCityValue onSearch={handleSearch} />

        {error && <p className="error">{error}</p>}
        <WeatherComponent weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
