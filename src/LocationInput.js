import React, { Component } from 'react';

class LocationInput extends React.Component {
  render() {
     return (
     	<form>
   		<input type="text" value={this.props.location} onChange={this.props.onChange}/>
      </form>
   )
  }
}

export default LocationInput;
