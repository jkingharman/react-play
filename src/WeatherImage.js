import React, { Component } from 'react';

class WeatherImage extends React.Component {

 render() {
 	let weatherMapping = {"Clear": "https://via.placeholder.com/150"}
   return (
   <div className="gallery-container">
     <img src={weatherMapping[this.props.weather["weather"]]}/>
     <h2> {this.props.weather["temp"]} </h2>
   </div>
   )
  }
}

export default WeatherImage;
