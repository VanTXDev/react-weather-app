import "./current-weather.css";

function CurrentWeather(currentWeatherData) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Ho Chi minh</p>
          <p className="weather-descrition">Sunny</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">18</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Detail</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feel like</span>
            <span className="parameter-value">22</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
