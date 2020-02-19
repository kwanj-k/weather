import expect from 'expect';
import weatherReducer from '../redux/reducers/weatherReducer';

import { GET_WEATHER } from '../redux/actions/types';

const initialState = {};
const weatherData = {
    weatherData: {
        weatherData: {
            currently: {
                humidity: 0.85,
                icon: "partly-cloudy-day",
                summary: "Mostly Cloudy",
                temperature: 66.26,
                time: 1582090046
            },
            latitude: -1.2920659,
            longitude: 36.8219462
        }
    }
}

describe('Weather Reducer Test', () =>{
    it('should change state when weather data comes', () => {
        const action = {
          type: GET_WEATHER,
          payload: weatherData
        };
        const newState = weatherReducer(initialState, action);
        expect(newState.weatherData).toEqual(action.payload);
    });
})
