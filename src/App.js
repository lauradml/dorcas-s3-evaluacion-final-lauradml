import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

const url='http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      name:'',
      photo:'',
      house:''
    }

  }

  componentDidMount() {
  this.getcharacters();
}
getcharacters() {
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
        <Home characters={this.state.characters}name={this.state.name} photo={this.state.image} house={this.state.house}/>
      </div>
    );
  }
}

export default App;
