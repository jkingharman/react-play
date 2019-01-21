import React, { Component } from 'react';

const WEATHERMAP = {
  '01d': 'https://via.placeholder.com/150',
  '02d': 'https://via.placeholder.com/150',
  '03d': 'https://via.placeholder.com/150',
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
