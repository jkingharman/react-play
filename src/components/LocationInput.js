import React, { Component } from "react";

class LocationInput extends Component {
  stopDefault(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form className="location-input" onSubmit={this.stopDefault}>
        <input
          placeholder="Enter city"
          type="text"
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}

export default LocationInput;
