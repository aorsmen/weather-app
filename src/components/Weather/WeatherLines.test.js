import { render, screen } from "@testing-library/react";
import WeatherLines from "./WeatherLines";

test('shows local weather data and units bar', () => {
    const weatherData = {
        "weather": [
            {
                "main": "Clouds",
                "icon": "https://cdn.freecodecamp.org/weather-icons/04d.png",
                "description": "overcast clouds"
            }
        ],
        "main": {
            "temp": 10.2,
            "feels_like": 9.26,
            "temp_min": 9.34,
            "temp_max": 11.09,
            "pressure": 1036,
            "humidity": 76
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.6,
            "deg": 280
        },
        "sys": {
            "country": "GB",
            "sunrise": 1676100195,
            "sunriseText": "7:23 AM",
            "sunset": 1676135263,
            "sunsetText": "5:07 PM"
        },
        "name": "Ham",
        "dt": 1676152858,
        "dtText": "Sat, Feb 11, 10:00 PM"
    }
    
    render(<WeatherLines weather={weatherData.weather} main={weatherData.main} unit="metric" name={weatherData.name} sys={weatherData.sys} wind={weatherData.wind} visibility={weatherData.visibility} dt={weatherData.dt} />);

    const symbol = screen.getByRole('img', {name: weatherData.weather[0].description});
    const time = screen.getByText(weatherData.dtText);
    // WeatherExtras
    const windField = screen.getByRole('img', {name: /wind/i});
    const humidityField = screen.getByRole('img', {name: /humidity/i});
    const pressureField = screen.getByRole('img', {name: /pressure/i});
    const visibilityField = screen.getByRole('img', {name: /visibility/i});
    // WeatherSun
    const sunriseLabel = screen.getByRole('img', { name: /sunrise/i });
    const sunriseValue = screen.getByText(weatherData.sys.sunriseText);
    const sunsetLabel = screen.getByRole('img', { name: /sunset/i });
    const sunsetValue = screen.getByText(weatherData.sys.sunsetText);
    // WeatherTemp
    const tempDef = screen.getByTestId('tempDef');
    const tempMin = screen.getByTestId('tempMin');
    const tempMax = screen.getByTestId('tempMax');
    const tempFeels = screen.getByTestId('tempFeels');

    expect(symbol).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(windField).toBeInTheDocument();
    expect(humidityField).toBeInTheDocument();
    expect(pressureField).toBeInTheDocument();
    expect(visibilityField).toBeInTheDocument();
    expect(sunriseLabel).toBeInTheDocument();
    expect(sunriseValue).toBeInTheDocument();
    expect(sunsetLabel).toBeInTheDocument();
    expect(sunsetValue).toBeInTheDocument();
    expect(tempDef).toHaveTextContent(`${Math.round(weatherData.main.temp)}°C`);
    expect(tempMin).toHaveTextContent(`${Math.round(weatherData.main.temp_min)}°C`);
    expect(tempMax).toHaveTextContent(`${Math.round(weatherData.main.temp_max)}°C`);
    expect(tempFeels).toHaveTextContent(`Feels like ${Math.round(weatherData.main.feels_like)}°C`);
});