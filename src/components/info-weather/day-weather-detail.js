import { getDayFormDate, getHourFormDate } from "../../Common";

function DayWeatherDetails({ dayWeatherData }) {
  return (
    <tr>
      <td>{getDayFormDate(dayWeatherData.dt_txt)}</td>
      <td>{getHourFormDate(dayWeatherData.dt_txt)}</td>
      <td>
        <img
          src={`icons/${dayWeatherData.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </td>
      <td>{dayWeatherData.dt}</td>
    </tr>
  );
}
export default DayWeatherDetails;
