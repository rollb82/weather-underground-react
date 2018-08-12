import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodaysForecast} from './components/TodaysForecast';
import {HourlyForecast} from './components/HourlyForecast';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      state: 'VA',
      city: 'Richmond'
    }
  }
  render() {
    return (
      <div className="App">
        <hr/>
        <h2>Todays forecast</h2>
        <TodaysForecast 
          state={this.state.state} 
          city={this.state.city}  />
        <hr/>
        <h2>Hourly forecast</h2>
        <HourlyForecast
          state={this.state.state} 
          city={this.state.city}  />
      </div>
    );
  }
}

export default App;
