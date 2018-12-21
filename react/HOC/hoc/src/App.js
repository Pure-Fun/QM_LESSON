import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A from './A';
import B from './B';
import C from './C';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>高阶函数</h3>
        <B />
        {/* <B />
        <C /> */}
      </div>
    );
  }
}

export default App;
