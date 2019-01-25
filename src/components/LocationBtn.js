import React, { Component } from "react";

class LocationBtn extends Component {
  render() {
    return (
      <button className="location-button" onClick={this.props.onClick}>
        Go
      </button>
    );
  }
}

export default LocationBtn;
