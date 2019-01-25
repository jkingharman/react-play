import React, { Component } from "react";
import WeatherImage from "./WeatherImage";
import LocationInput from "./LocationInput";
import LocationBtn from "./LocationBtn";

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: "",
      currentLocation: "London"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.getWeather();
  }

  handleClick() {
    this.getWeather();
  }

  handleChange(e) {
    this.setState({
      currentLocation: e.target.value
    });
  }

  toCelcius(kelvin) {
    return (kelvin - 273).toFixed();
  }

  parseResponse(json) {
    if (json.cod === 200) {
      this.setState({
        currentWeather: {
          weather: json.weather[0].icon,
          temp: this.toCelcius(json.main.temp)
        }
      });
    } else if (json.cod === "404") {
      this.setState({
        currentWeather: {
          weather: "unknown",
          temp: "unknown"
        }
      });
    } else {
      console.log("error");
    }
  }

  getWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        this.state.currentLocation
      }&APPID=d67b6ea31078ccea4bd77846d9569c02`
    ).then(res => {
      res.json().then(this.parseResponse.bind(this));
    });
  }

  render() {
    return (
      <div className="container">
        <WeatherImage weather={this.state.currentWeather} />
        <LocationInput
          location={this.state.currentLocation}
          onChange={this.handleChange}
        />
        <LocationBtn onClick={this.handleClick} />
      </div>
    );
  }
}

export default WeatherContainer;
