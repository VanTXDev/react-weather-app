import { getDayFormDate, getHourFormDate } from "../../Common";
import "./day-weather-detail.css";

function DayWeatherDetails({ dayWeatherData }) {
  return (
    <tr className="weather-detail-item">
      <td colSpan={3}>{getDayFormDate(dayWeatherData.dt_txt)}</td>
      <td colSpan={3}>{getHourFormDate(dayWeatherData.dt_txt)}</td>
      <td colSpan={3} className="tempory-forecast">
        Min: {Math.round(dayWeatherData.main.temp_min)}°C
        <br/>
        Max: {Math.round(dayWeatherData.main.temp_max)}°C
        </td>
      <td colSpan={3}>
        <img
          src={`icons/${dayWeatherData.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
        <p className="weather-descrition">{dayWeatherData.weather[0].description}</p>
      </td>
    </tr>
  );
}
export default DayWeatherDetails;
