import { render, screen } from "@testing-library/react";
import WeatherTemp from "./WeatherTemp";

test('showing temperature fields correctly', () => {
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
        }
    };

    render(<WeatherTemp weather={weatherData.weather} main={weatherData.main} unit="metric" />);

    const tempDef = screen.getByTestId('tempDef');
    const tempMin = screen.getByTestId('tempMin');
    const tempMax = screen.getByTestId('tempMax');
    const tempFeels = screen.getByTestId('tempFeels');

    expect(tempDef).toHaveTextContent(`${Math.round(weatherData.main.temp)}°C`);
    expect(tempMin).toHaveTextContent(`${Math.round(weatherData.main.temp_min)}°C`);
    expect(tempMax).toHaveTextContent(`${Math.round(weatherData.main.temp_max)}°C`);
    expect(tempFeels).toHaveTextContent(`Feels like ${Math.round(weatherData.main.feels_like)}°C`);
});