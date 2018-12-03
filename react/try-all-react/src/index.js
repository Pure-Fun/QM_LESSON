import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class HelloUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Michael Jordan'
    }
    /* setTimeout(() => {
      this.setState({
        username: '嘉兴'
      })
    }, 2000) */
    // this.handleChange = this.handleChange.bind(this);    //改变this指向
  }
  render() {
    return (
      <div>
        Hello {this.state.username}
        <input type="text" value={this.state.username} onChange={(e) => {this.handleChange(e)}} />
      </div>
    )
    // return React.createElement('div', null, 'Hello World!');
  }
  handleChange(e) {
    console.log('aaaa' + this);
    this.setState({
      username: e.target.value
    })
    console.log(e.target.value);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
