import {
    GET_WEATHER,
    UPDATE_TITLE
} from '../actions/types';
  
  const initialState = {};
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weatherData: action.payload
            };
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload
            };
        default:
            return state;
        };
  }
