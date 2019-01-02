import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const connect = (Comp) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object,
      dispatch: PropTypes.func,
      subscribe: PropTypes.func,
      getStore: PropTypes.func
    }

    constructor(props) {
      super(props);
      this.state = {}
    }

    componentWillMount() {
      const { subscribe } = this.context;
      this._upState();
      subscribe(() => this._upDate())
    }

    _upState() {
      const { getStore } = this.context;
      this.setState({
        ...getStore()
      })
    }
    render() {
      return (
        <div className="connect">
          <Comp {...this.state} />
        </div>
      )
    }
  }
  return Connect;
}