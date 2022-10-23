import { Button, Table } from "react-bootstrap";
import "./forecast.css";
import DayWeatherDetails from "../info-weather/day-weather-detail";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Forecast({ data }) {
  const [curPage, setCurPage] = useState(7);
  const handleBtnClickSeeMore = () => {
    setCurPage((preValue) => preValue + 7);
  };
  return (
    <>
      <Table responsive>
        <tbody>
          {data.list.slice(0, curPage).map((day, index) => (
            <DayWeatherDetails dayWeatherData={day} key={index} />
          ))}
        </tbody>
      </Table>
      <Button
        variant="success"
        className="BtnSeeMore"
        onClick={handleBtnClickSeeMore}
      >
        See More
      </Button>
    </>
  );
}
export default Forecast;
