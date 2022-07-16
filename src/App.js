import "./App.css";
import Search from "./components/search/search";
import Wather from "./components/current-wather/wather";
import { WeatherApiKey, WeatherApiUrl } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeatherRes, setCurrentWeatherResult] = useState(null);

  const [forecastRes, setForecastRes] = useState(null);

  const handleChangeData = (search) => {
    const [lat, lon] = search.value.split(" ");

    const currentWeatherDetails = fetch(
      `${WeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`
    );

    const forecastDetails = fetch(
      `${WeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherDetails, forecastDetails]).then(
      async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeatherResult({city:search.label, weatherResponse})

        setForecastRes({city:search.label, forecastResponse})
        })
    .catch(err => console.error(err));
  };


  return (
    <div className="container">
      <Search searchData={handleChangeData} />
      {currentWeatherRes && <Wather data={currentWeatherRes}/>}
    </div>
  );
}

export default App;
