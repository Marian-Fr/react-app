import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
return(
    <div className="WeatherInfo">
 <h1>Kiyv</h1>
    <ul>
        <li>
            <FormattedDate date={props.data.date} />
        </li>
        <li>
            Cloudy
        </li>
    </ul>
    <div class="row">
    <div class="col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"/>
 <span class="temperature">{props.data.temperature}</span>
 <span class="celsius">℃</span>
    </div>
    <div class="col-6">
       <ul>
        <li>
            Humidity:{props.data.humidity} 88%
        </li>
        <li>
            Wind: {props.data.wind}km/h
        </li>
       </ul>
    </div>
        </div>
        </div>);
}