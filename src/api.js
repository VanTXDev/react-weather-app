//base url api
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const CURRENT_WEATHER_API_URL =
  "https://api.openweathermap.org/data/2.5";

//api key
export const GEO_API_KEY = "0155750790mshb6c99d85e65001dp1aa5c2jsn68311c2feeae";
export const CURRENT_WEATHER_API_KEY = "1fb3ce34fb68e4139027ffce2b75a6cc";

export const geoAPIOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
