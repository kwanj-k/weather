import axiosConfig from '../../axiosConfig';
import {
    GET_WEATHER,
    UPDATE_TITLE
} from './types';

// Get location
async function getLocation(url) {
    const res = await axiosConfig
        .get(url)
        .then( res => {
            return res.data;
        })
    return res
}

// Get Weather
export const getWeather = (location, rdate) => dispatch => {
        let Gkey = process.env.REACT_APP_GOOGLE_API_KEY
        let Gurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${Gkey}`
        let purl = process.env.REACT_APP_PROXY
        getLocation(purl + '/location/?url=' + Gurl).then(resdata => {
            let key = process.env.REACT_APP_DARK_SKY_KEY
            let durl = process.env.REACT_APP_DARK_SKY_URL
            if(resdata.results.length !== 0) {
                const latitude = resdata.results[0].geometry.location['lat'];
                const longitude = resdata.results[0].geometry.location['lng'];
                let url = `${durl}/${key}/${latitude},${longitude},${rdate}?exclude='flags','hourly', 'daily'`
                axiosConfig
                    .get(purl + '/weather/?url=' + url)
                    .then( res => {
                        dispatch(loadWeather(res.data));
                        dispatch(updateTitle(resdata.results[0].formatted_address))
                    })

            }
        })
}

const updateTitle = (title) => {
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

const loadWeather = (weatherData) => {
    return {
        type: GET_WEATHER,
        payload: weatherData
    }
}
