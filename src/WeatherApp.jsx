import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] =useState({
    city:"Delhi",
    feelsLike: 26.54,
    humidity: 21,
    temp: 27.66,
    tempMax: 27.66,
    tempMin: 27.66,
    weather: "few clouds"
  });

    let updateInfo = (newInfo) => {
      setWeatherInfo(newInfo);
    }

  return(
    <div style={{textAlign:"center"}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}