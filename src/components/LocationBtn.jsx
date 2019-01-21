import React, { Component } from 'react';

class LocationBtn extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} />
    );
  }
}

export default LocationBtn;
