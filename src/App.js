import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

const url='http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor(props) {
    super(props);

    this.filterName = this.filterName.bind(this);

    this.state = {
      characters: [],
      name:'',
      photo:'',
      house:''
    }

  }
  filterName(e) {
    const resultado = e.currentTarget.value.toLowerCase();
    this.setState({
      name: resultado
    });
  }

  componentDidMount() {
  this.getCharacters();
}
getCharacters() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
      characters: data
      });
    });
}

  render() {
    return (
      <div className="App">
        <Home characters={this.state.characters} filterMovies={this.filterMovies} name={this.state.name}
        photo={this.state.image} house={this.state.house} filterName={this.filterName}/>
      </div>
    );
  }
}

export default App;
