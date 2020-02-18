import axiosConfig from '../../axiosConfig';
import {
    GET_LOCATION,
    GET_ERRORS,
} from './types';

// Get Location
export const getLocation= (location) => dispatch => {
    let key = process.env.REACT_APP_GOOGLE_API_KEY
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`
    return axiosConfig
        .get(url)
        .then( res => {
            dispatch(loadLocationData(res.data));
        })
        .catch(err =>
            dispatch({
            type: GET_ERRORS,
            payload: err.response.data
            })
        );
}

const loadLocationData = (locationData) => {
    return {
        type: GET_LOCATION,
        payload: locationData
    }
}
