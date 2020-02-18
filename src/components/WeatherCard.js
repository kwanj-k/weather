import 'date-fns';

import React, { Component } from "react";
import { connect } from 'react-redux';


import { icons } from '../utils/icons';
import iconkey from '../utils/icons';



import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getWeather } from '../redux/actions/getWeather';

import '../css/CurrentDate.css';
import "../css/Location.css";
import "../css/WeatherCard.css";
import "../css/weather-icons.min.css";

class WeatherCard extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            temp: '',
            icon: 'cloudy',
            title: '',
            humidity: '',
            location: 'Nairobi',
            lat: 0,
            lng: 0
        }
        this.text = React.createRef();
      }
    onChange = date => this.setState({ date })

    componentDidMount() {
        this.props.getWeather(this.state.location)
      }

    componentWillReceiveProps(nextProps){
        this.setState({
            temp: Math.round((5/9) * (nextProps.weatherData.weatherData.currently['temperature'] - 32)),
            date: this.timeConverter(nextProps.weatherData.weatherData.currently['time']),
            icon: String(nextProps.weatherData.weatherData.currently['icon']),
            humidity: nextProps.weatherData.weatherData.currently['humidity'],
            lat : nextProps.weatherData.weatherData['latitude'],
            lng: nextProps.weatherData.weatherData['longitude'],
            title: nextProps.weatherData.title,
        })
    }
    handleDateChange = event => {
        this.setState({
          date: event.target.value,
        });
      };
    formhandleChange = (event) => {
        event.preventDefault();
        this.setState({ 
            location: event.target.value
        });
      }
    onSubmit = e => {
        e.preventDefault();
        this.props.getWeather(this.state.location)
      };
    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }
    render() {
        const { location, date } = this.state
        return (
            <div className="WeatherCard">
                <form noValidate autoComplete="off">
                    <TextField
                    style={{width: 155}}
                    onChange={ this.formhandleChange}
                    label={location}
                    value={location}
                    name="location"
                    />
                    <Button 
                        className="search"
                        onClick={this.onSubmit}
                        variant="contained" size="small" color="primary">
                        Get Weather
                    </Button>
                    </form>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <DatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date"
                        format="MM/dd/yyyy"
                        value={date}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                        <TimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time"
                        value={date}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                        />
                    </Grid>
                    </MuiPickersUtilsProvider>
                    <section className="location">
                    <span ref={this.text}>{this.state.title}</span>
                    </section>
                    <section className="date-current">
                        <span  className="date-current__text">
                            {this.state.date}
                        </span>
                    </section>
                    <section className="current-condition">
                        <div className="wrapper-temperature">
                            <div className="temperature">
                                <span ref={this.value} className="temperature__value">{this.state.temp}</span>
                                <div ref={this.unit} className="temperature__unit">
                                    <span className="temperature__unit-dot"></span>
                                    <span className="temperature__unit-letter">c</span>
                                </div>
                            </div>
                            <img className="temperature__icon" alt="icon" src={icons[iconkey(`${this.state.icon}`).id]} />
                            <span ref={this.status} className="temperature__status">{this.state.title}</span>
                            <span ref={this.status} className="temperature__status">{this.state.humidity} Humidity</span>

                        </div>
                    </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
  }
  export default connect(mapStateToProps, {getWeather})(WeatherCard);
