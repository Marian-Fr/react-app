import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo (props){
    return (<div className="WeatherInfo">
<h1>{props.data.city}</h1>

    <ul>
        <li>
     <FormattedDate date={props.data.date} />
        </li>
        <li>
            Cloudy
        </li>
    </ul>
    <div className="row">
    <div className="col-6">
<img src={props.data.iconUrl} alt="Cloudy"/>
 <span className="temperature">{props.data.temperature}</span>
 <span className="celsius">℃</span>
    </div>
    <div className="col-6">
       <ul>
        <li>
            Humidity:{props.data.humidity} %
        </li>
        <li>
            Wind: {props.data.wind}km/h
        </li>
       </ul>
    </div>
        </div>
        </div>);
}