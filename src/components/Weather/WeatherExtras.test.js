import { render, screen } from "@testing-library/react";
import WeatherExtras from "./WeatherExtras";

test('showing 4 extra field correctly', () => {
    const weatherData = {
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
        }
    };

    render(<WeatherExtras wind={weatherData.wind} humidity={weatherData.main.humidity} pressure={weatherData.main.pressure} visibility={weatherData.visibility} unit="metric" />);

    const windField = screen.getByRole('img', {name: /wind/i});
    const humidityField = screen.getByRole('img', {name: /humidity/i});
    const pressureField = screen.getByRole('img', {name: /pressure/i});
    const visibilityField = screen.getByRole('img', {name: /visibility/i});

    expect(windField).toBeInTheDocument();
    expect(humidityField).toBeInTheDocument();
    expect(pressureField).toBeInTheDocument();
    expect(visibilityField).toBeInTheDocument();
});