import React from 'react';
import { DataInit } from "./DataInit";
import { WeatherData } from '../components/Weather/WeatherInterfaces';

const DataContext = React.createContext({
  data: DataInit,
  setData: (value: WeatherData) => {}
});

export default DataContext;