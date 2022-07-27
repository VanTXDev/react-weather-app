import { useState } from "react";
import { CURRENT_WEATHER_API_KEY, CURRENT_WEATHER_API_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchKey) => {
    const [lat, lon] = searchKey.value.split(" ");
    const currentWeatherFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${CURRENT_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentweatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchKey.label, ...currentweatherResponse });
        setForecast({ city: searchKey.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
