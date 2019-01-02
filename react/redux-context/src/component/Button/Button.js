import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
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

  changeContext = (type) => {
    const { dispatch } = this.context;
    dispatch({
      type: type,
      payload: `我是修改后的${type}`
    })
  }

  render() {
    return (
      <div>
        <div className="button">
          <div className="btn" onClick={() => this.changeContext('HEAD')}>{this.state.headBtn}</div>
          <div className="btn" onClick={() => this.changeContext('BODY')}>{this.state.bodyBtn}</div>
        </div>
      </div>
    )
  }
}