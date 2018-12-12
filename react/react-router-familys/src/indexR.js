import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function AmbiguousExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about" component="">about</Link>
          </li>
          <li>
            <Link to="/company" component="">company</Link>
          </li>
          <li>
            <Link to="/kim" component="">kim</Link>
          </li>
          <li>
            <Link to="/chris" component="">chris</Link>
          </li>
        </ul>

          {/* <Route path='/about' component={About}/>
          <Route path='/company' component={Company}/> */}
          <Route path='/:user' component={User}/>

      </div>
    </Router>
  );
}

/* function About() {
  return <h2>about</h2>
}

function Company() {
  return <h2>company</h2>
} */

function User({match}) {
  return <div>User:{match.params.user}</div>
}

ReactDOM.render ( <AmbiguousExample />, document.getElementById('root'))
