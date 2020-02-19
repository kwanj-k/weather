import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import jest from 'jest-mock';
import { WeatherCard } from '../components/WeatherCard';

Enzyme.configure({ adapter: new Adapter() });
describe('weather card view', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  beforeEach(() => {
    props = {
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
        },
        getWeather: jest.fn(() => {
            Promise.resolve();
          }),
      },
    state = {
        date: '',
        rdate: Math.round(new Date().getTime() / 1000),
        temp: '',
        icon: 'cloudy',
        title: '',
        wtitle: '',
        humidity: '',
        location: 'Nairobi',
        lat: 0,
        lng: 0
    },
    wrapper = shallow(<WeatherCard {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render weather card', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be called with right arguments', () => {
    wrapperInstance.setState(state)
    expect(props.getWeather).toHaveBeenCalledWith(state.location, state.rdate);
  });
});
