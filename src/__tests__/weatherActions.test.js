import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getWeather }  from '../redux/actions/getWeather';
import * as types from '../redux/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Weather Actions test', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('Get weather data', () => {
    const MockHttpResponse = {
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
    };
    const expectedAction = {
        type: types.GET_WEATHER
      }
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
        request.respondWith({
            response: MockHttpResponse
      });
    });
    
    store.dispatch(getWeather('location', 9383838)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  
  });
});
