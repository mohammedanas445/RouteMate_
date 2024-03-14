import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './Home';
import { Background } from './Background';
// import TravelBookingPlatform from '../travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
