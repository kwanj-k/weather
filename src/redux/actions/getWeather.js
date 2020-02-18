import axiosConfig from '../../axiosConfig';
import {
    GET_WEATHER
} from './types';

// Get Weather
export const getWeather= (latitude, longitude, time) => dispatch => {
    let key = process.env.REACT_APP_DARK_SKY_KEY
    let durl = process.env.REACT_APP_DARK_SKY_URL
    let url = `${durl}/${key}/${latitude},${longitude}?exclude='flags','hourly', 'daily'`
    return axiosConfig
        .get(url)
        .then( res => {
            dispatch(loadWeather(res.data));
        })
}

const loadWeather = (weatherData) => {
    return {
        type: GET_WEATHER,
        payload: weatherData
    }
}
