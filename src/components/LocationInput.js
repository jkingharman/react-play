import React, { Component } from 'react';

class LocationInput extends Component {
  render() {
    return (
      <form className='location-input'>
        <input placeholder="Enter city" type="text" onChange={this.props.onChange} />
      </form>
    );
  }
}

export default LocationInput;
