import React, { Component } from 'react';

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context(
  '../assets', false, /\.(png)$/
));

const WEATHERMAP = {
  '01d': images["1d.png"],
  '02d': images["2d.png"],
  '03d': images["3d.png"],
  '04d': images["4d.png"],
  '09d': images["9d.png"],
  '10d': images["10d.png"],
  '11d': images["11d.png"],
  '13d': images["13d.png"],
  '50d': images["50d.png"],
  '01n': images["1n.png"],
  '02n': images["2n.png"],
  '03n': images["3n.png"],
  '04n': images["4n.png"],
  '09n': images["9n.png"],
  '10n': images["10n.png"],
  '11n': images["11n.png"],
  '13n': images["13n.png"],
  '50n': images["50n.png"],
  'unknown': images["error.png"],
};

class WeatherImage extends Component {
  render() {
    return (
      <div className="gallery-container">
        <img src={WEATHERMAP[this.props.weather.weather]} alt="weather" />
        <h2>
          {this.props.weather.temp}
          °C
        </h2>
      </div>
    );
  }
}

export default WeatherImage;
