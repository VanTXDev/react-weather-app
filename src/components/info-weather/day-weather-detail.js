import { getDayFormDate, getHourFormDate } from "../../Common";
import "./day-weather-detail.css";

function DayWeatherDetails({ dayWeatherData }) {
  return (
    <tr className="weather-detail-item">
      <td colSpan={3}>{getDayFormDate(dayWeatherData.dt_txt)}</td>
      <td colSpan={3}>{getHourFormDate(dayWeatherData.dt_txt)}</td>
      <td colSpan={3}>
        <img
          src={`icons/${dayWeatherData.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </td>
      <td colSpan={3}>{dayWeatherData.dt}</td>
    </tr>
  );
}
export default DayWeatherDetails;
