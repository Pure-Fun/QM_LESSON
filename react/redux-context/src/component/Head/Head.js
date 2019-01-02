import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from '../../redux';

class Head extends Component {
  static contextTypes = {
    store: PropTypes.object,
    dispatch: PropTypes.func,
    subscribe: PropTypes.func,
    getStore: PropTypes.func
  } 

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    const { subscribe } = this.context;
    this._upState();
    subscribe(() => this._upState())
  }

  _upState() {
    const { getStore } = this.context;
    this.setState({
      ...getStore()
    })
  }

  render() {
    return (
      <div className="head">{this.state.head}</div>
    )
  }
}

export default connect(Head);