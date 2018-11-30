import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import './index.css';

class App extends Component {
  // jsx 最终还是要编译成js的
  render() {
    return (
      <div className="App container">
        <h1>Loving you!</h1>
        <Table />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
