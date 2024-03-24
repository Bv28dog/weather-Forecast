import { convertKelvinToCelsius } from "../utils";
import "../components/weather.css";

export const WeatherComponent = ({ weatherData }) => {
  return (
    <div>
      {weatherData && (
        <div className="show_discriptions">
          <h2>Weather in {weatherData.name}</h2>
          <p className="p_temp"> {Math.round(convertKelvinToCelsius(weatherData.main.temp))}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind speed: {Math.round(weatherData.wind.speed)} km/h</p>
        </div>
      )}
    </div>
  );
};
