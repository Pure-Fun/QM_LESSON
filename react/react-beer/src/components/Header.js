import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    siteName: propTypes.string
  }
  render() {
    return (
      <h1>
        <Link to="/">{this.props.siteName}</Link>
        <Link to="/beer">详情页</Link>
      </h1>
    )
  }
}

export default Header;