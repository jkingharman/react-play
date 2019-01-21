import React, { Component } from 'react';
import WeatherContainer from './WeatherContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <WeatherContainer />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
