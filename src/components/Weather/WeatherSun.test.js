import { render, screen } from "@testing-library/react";
import WeatherSun from "./WeatherSun";

test('showing sunrise & sunset data', () => {
    const data = {
        "sunrise": 1676100195,
        "sunriseText": "7:23 AM",
        "sunset": 1676135263,
        "sunsetText": "5:07 PM"
    };

    render(<WeatherSun sunrise={data.sunrise} sunset={data.sunset} />);

    // Check sunrise
    const sunriseLabel = screen.getByRole('img', { name: /sunrise/i });
    const sunriseValue = screen.getByText(data.sunriseText);

    // Check sunset
    const sunsetLabel = screen.getByRole('img', { name: /sunset/i });
    const sunsetValue = screen.getByText(data.sunsetText);
    
    expect(sunriseLabel).toBeInTheDocument();
    expect(sunriseValue).toBeInTheDocument();
    expect(sunsetLabel).toBeInTheDocument();
    expect(sunsetValue).toBeInTheDocument();
});