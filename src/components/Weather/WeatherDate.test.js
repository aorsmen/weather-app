import { render, screen } from "@testing-library/react";
import WeatherDate from "./WeatherDate";

test('showing date correctly', () => {
    const data = {
        dt: 1676152858,
        dtText: 'Sat, Feb 11, 10:00 PM'
    };

    render(<WeatherDate dt={data.dt} />);

    const time = screen.getByText(data.dtText);

    expect(time).toBeInTheDocument();
});