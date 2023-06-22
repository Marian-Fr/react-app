import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(){
    const [ready, setReady] = useState(false);
const [weatherData, setWeatherData] = useState({});
function handleResponse(response){
console.log(response.data);
setWeatherData ({
temperature: Math.round(response.data.temperature.current),
wind :response.data.wind,
humidity:response.data.temperature.current.humidity

    })


setReady(true);
}
if (ready){
return(
    <div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" 
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>

        </form>
    <h1>Kiyv</h1>
    <ul>
        <li>
            Wendsday 18:00
        </li>
        <li>
            Cloudy
        </li>
    </ul>
    <div class="row">
    <div class="col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"/>
 <span class="temperature">{weatherData.temperature}</span>
 <span class="celsius">℃</span>
    </div>
    <div class="col-6">
       <ul>
        <li>
            Humidity:{weatherData.humidity} 88%
        </li>
        <li>
            Wind: {weatherData.wind.speed}km/h
        </li>
       </ul>
    </div>
        </div>
    </div>);
}
else{
const apiKey="2e8483398ocdfb8e6befab4eb2at6740";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
}
    

} 