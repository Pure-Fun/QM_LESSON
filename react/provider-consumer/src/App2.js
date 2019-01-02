import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import enhanceComponent from './enhanceComponent'

var Content = (props) => <p>I am {props.name}</p>;

Content.propTypes = {
  name: PropTypes.string
}

var EnhanceContent = enhanceComponent(Content);

class App extends Component {
  render() {
    return (
      <div className="App">
        <EnhanceContent name="Content component" />
      </div>
    );
  }
}

export default App;
