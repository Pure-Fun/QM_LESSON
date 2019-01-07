import React, { Component } from 'react';
import './Index.css';
import Header from './Header';

export default class Index extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>

        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">1</div>

            <div className="main">2</div>

            <div className="sidebar">3</div>
          </div>
        </div>
      </div>
    )
  }
}