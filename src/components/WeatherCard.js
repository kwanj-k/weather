import React, { Component } from "react";

import Location from "./Location";
import DateCurrent from "./CurrentDate";
import MaterialUIPickers from "./DateTimePicker";
import BasicTextFields from "./LocationSearch";
import { icons } from '../utils/icons';
import iconkey from '../utils/icons';


import "../css/WeatherCard.css";
import "../css/weather-icons.min.css";

class WeatherCard extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    render() {
    return (
        <div className="WeatherCard">
            <BasicTextFields/>
            <MaterialUIPickers/>
            <Location/>
            <DateCurrent/>
            <section className="current-condition">
                <div className="wrapper-temperature">
                    <div className="temperature">
                        <span ref={this.value} className="temperature__value">24</span>
                        <div ref={this.unit} className="temperature__unit">
                            <span className="temperature__unit-dot"></span>
                            <span className="temperature__unit-letter">c</span>
                        </div>
                    </div>
                    <img className="temperature__icon" alt="icon" src={icons[iconkey("partly-cloudy-day").id]} />
                    <span ref={this.status} className="temperature__status">Partly Cloudy</span>
                    <span ref={this.status} className="temperature__status">0.83 Humidity</span>

                </div>
            </section>
        </div>
    );
  }
}

export default WeatherCard;
