import { Table } from "react-bootstrap";
import "./forecast.css";
import DayWeatherDetails from "../info-weather/day-weather-detail";

function Forecast({ data }) {
  return (
    <>
      <Table responsive>
        <tbody>
          {data.list.map((day, index) => (
            <DayWeatherDetails dayWeatherData={day} key={index} />
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Forecast;
