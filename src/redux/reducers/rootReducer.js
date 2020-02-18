import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import locationReducer from './locationReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    errors: errorReducer,
    locationData: locationReducer,
    weatherData: weatherReducer

})
