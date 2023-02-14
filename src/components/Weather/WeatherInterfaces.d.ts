export interface WeatherObject {
    main: string;
    icon: string;
    description: string;
};

export interface WeatherMain {
    feels_like: number;
    humidity:number;
    temp: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
};

export interface WeatherSys {
    country: string;
    sunrise: number;
    sunset: number;
};

export interface WeatherWind {
    deg: number;
    speed: number;
};
  
export interface WeatherData {
    name: string;
    sys: WeatherSys;
    weather: WeatherObject[];
    main: WeatherMain;
    visibility: number;
    wind: WeatherWind;
    dt: number;
    cod: number;
};

export type unitType = 'metric' | 'imperial';
