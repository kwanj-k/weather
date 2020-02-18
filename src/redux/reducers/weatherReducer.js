import {
    GET_WEATHER
} from '../actions/types';
  
  const initialState = {};
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weatherData: action.payload
            };
        default:
            return state;
        };
  }
