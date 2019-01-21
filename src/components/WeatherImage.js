import React, { Component } from 'react';
import sun from '../assets/1_sun.png'
import sunCloud from '../assets/2_sun_cloud.png'
import cloud from '../assets/3_cloud.png'

const WEATHERMAP = {
  '01d': sun,
  '02d': sunCloud,
  '03d': cloud,
  '04d': 'https://via.placeholder.com/150',
  '09d': 'https://via.placeholder.com/150',
  '10d': 'https://via.placeholder.com/150',
  '11d': 'https://via.placeholder.com/150',
  '13d': 'https://via.placeholder.com/150',
  '50d': 'https://via.placeholder.com/150',
  '01n': 'https://via.placeholder.com/150',
  '02n': 'https://via.placeholder.com/150',
  '03n': 'https://via.placeholder.com/150',
  '04n': 'https://via.placeholder.com/150',
  '09n': 'https://via.placeholder.com/150',
  '10n': 'https://via.placeholder.com/150',
  '11n': 'https://via.placeholder.com/150',
  '13n': 'https://via.placeholder.com/150',
  '50n': 'https://via.placeholder.com/150',
  'unknown': 'https://via.placeholder.com/300',
};

class WeatherImage extends Component {
  render() {
    return (
      <div className="gallery-container">
        <img src={WEATHERMAP[this.props.weather.weather]} alt="weather" />
        <h2>
          {' '}
          {this.props.weather.temp}
          {' '}
°C
        </h2>
      </div>
    );
  }
}

export default WeatherImage;
