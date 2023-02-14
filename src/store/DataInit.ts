import { WeatherData } from "../components/Weather/WeatherInterfaces";

export const DataInit: WeatherData = {
  name: "",
  sys: {
    country: '',
    sunrise: 0,
    sunset: 0
  },
  weather: [],
  main: {
    feels_like: 0,
    humidity: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    pressure: 0
  },
  visibility: 0,
  wind: {
    deg: 0,
    speed: 0
  },
  dt: 0,
  cod: 0
};