import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filmAction } from  './actions';

class App extends Component {
  componentDidMount() {
    this.props.getFilmData();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.films.map((film, index) => {
              return (
                <li key={index}>
                  <h2>{film.name}</h2>
                  <img src={film.poster} alt="film.name" />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmData: () => {
      dispatch((dispatch) => {
        filmAction(dispatch)
      });
      // filmAction(dispatch);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);