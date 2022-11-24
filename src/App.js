import { useState } from "react";
import { CURRENT_WEATHER_API_KEY, CURRENT_WEATHER_API_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

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
        if(cityName === "" || cityName === undefined) {
          cityName = currentweatherResponse.name;
        }
        setCurrentWeather({ city: cityName, ...currentweatherResponse });
        setForecast({ city: cityName, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1162.021881810139!2d109.13417127327953!3d11.583357753726103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1669264474536!5m2!1svi!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="ifr-map"></iframe>
    </div>
  );
}

export default App;
