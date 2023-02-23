import { useState } from "react";
import { CURRENT_WEATHER_API_KEY, CURRENT_WEATHER_API_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [latVal, setLatVal] = useState(11.546);
  const [lonVal, setLonVal] = useState(109.145);

  const handleOnSearchChange = (searchKey) => {
    const [lat, lon] = searchKey.value.split(" ");
    const currentWeatherFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentweatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        var cityName = searchKey.label;
        if (cityName === "" || cityName === undefined) {
          cityName = currentweatherResponse.name;
        }
        setCurrentWeather({ city: cityName, ...currentweatherResponse });
        setForecast({ city: cityName, ...forecastResponse });
        setLatVal(lat);
        setLonVal(lon);
      })
      .catch((err) => console.log(err));
  };
  const handleOnClickIfrWeather = () => {
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      {latVal && lonVal && (
        <div id="ifr-weather">
          <iframe
            onClick={handleOnClickIfrWeather()}
            src={
              "https://embed.windy.com/embed2.html?lat=" +
              latVal +
              "&lon=" +
              lonVal +
              "&zoom=14&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=true&detailLat=" +
              latVal +
              "&detailLon=" +
              lonVal +
              "&metricWind=default&metricTemp=default"
            }
            frameborder="0"
            title="ifr-windy"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
