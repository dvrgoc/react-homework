import React, { Component } from 'react';
import logo from './ps4.svg';
import './App.css';

import ProductListing from './components/ProductListing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PS 4 store</h1>
        </header>
      <ProductListing />
      </div>
    );
  }
}

export default App;
