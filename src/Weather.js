import React from "react";
import "./Weather.css";

export default function Weather(){
    return<div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" 
            placeholder="Enter a city..."
            className="form-control"
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
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
 16℃
    </div>
    <div class="col-6">
       <ul>
        <li>
            Precipitation: 31%
        </li>
        <li>
            Humidity: 88%
        </li>
        <li>
            Wind: 13km/h
        </li>
       </ul>
    </div>
        </div>
    </div>;
}