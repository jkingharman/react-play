import React, { Component } from 'react';
import WeatherImage from './WeatherImage';
import LocationInput from './LocationInput';
import LocationBtn from './LocationBtn';

class WeatherContainer extends React.Component {

	constructor(props) {
  	super(props);
  	this.state = {currentWeather: "default", currentLocation: "London"};
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

	componentWillMount() {
  	this.getWeather()
  }

  handleClick() {
   this.getWeather()
  }

  handleChange(e) {
  	this.setState({currentLocation: e.target.value})
  }

  parseResponse(res) {
  	return {
    	weather: res.weather[0].icon,
      temp: res.main.temp
    }
  }


	getWeather() {
   // refactor promise structure when writing for real request
  	let response = new Promise((resolve) => {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.currentLocation + "&APPID=d67b6ea31078ccea4bd77846d9569c02"

    resolve(fetch(url))
    });

    response.then(res => {
  		res.json()
      	.then(json => {
          if (json.cod == "200") {
            this.setState({currentWeather: this.parseResponse(json)})
          } else if (json.cod == "404") {
            this.setState({currentWeather: {weather: "unknown", temp: "unknown"}})
          } else {
            console.log("error")
          }
        })
    })
  };

  render() {
   return (
   <div className="container">
   <WeatherImage weather={this.state.currentWeather}/>
   <LocationInput onChange={this.handleChange}/>
   <LocationBtn onClick={this.handleClick}/>
   </div>
   )
  }
}

export default WeatherContainer;
