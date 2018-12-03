import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import Form from './Form'

class App extends Component {
  state = {
    characters: [
      {
        'name': 'Jordan',
        'job': 'god'
      },
      {
        'name': 'Kobe',
        'job': 'good'
      },
      {
        'name': 'Kurry',
        'job': 'ball'
      }
    ]
  }
  componentDidMount() {
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*`;
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      })
  }
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table characterData={characters}
        removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      })
    })
  }
  handleSubmit = character => {
    console.log('we');
    this.setState({
      characters: [character, ...this.state.characters]
    })
  }
} 
// ReactDOM.render(<Table />, document.getElementById('table'));

export default App;