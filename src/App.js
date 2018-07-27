import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pdf from './Pdf.js';

class Bar {
  static foo = 'foo'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{`${Bar.foo}`}</h1>
        <header className="App-header">
          <Pdf
            fillWidth
            file='http://localhost:9999/two-page.pdf' />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
