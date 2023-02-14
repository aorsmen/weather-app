import { useState, useCallback } from "react";
import DataContext from "./DataContext";
import { DataInit } from "./DataInit";
import { WeatherData } from "../components/Weather/WeatherInterfaces";



const DataProvider: React.FC<{children: React.ReactNode}> = props => {
  const [wtData, setWTData] = useState(DataInit);

  const setData = useCallback((value: WeatherData) => {
    setWTData(value);
  }, []);

  const ctx = {
    data: wtData,
    setData
  };

  return (
    <DataContext.Provider value={ctx}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;