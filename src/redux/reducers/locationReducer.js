import {
    GET_LOCATION
} from '../actions/types';
  
  const initialState = {};
  
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATION:
            return {
                ...state,
                locationData: action.payload
            };
        default:
            return state;
        };
  }