import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import CharactersDetail from'./components/CharactersDetail';
import {Switch, Route} from 'react-router-dom';

const url='https://hp-api.herokuapp.com/api/characters';

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
      const result = data;
         let resultId = [];

         for (let i=0; i<result.length; i++) {
           resultId[i] = {
             ...result[i],
             id: i
}
}
      this.setState({
      characters: resultId
      });
    });
}

  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path="/" render={ () => <Home characters={this.state.characters} filterMovies={this.filterMovies} name={this.state.name}
          photo={this.state.image} house={this.state.house} filterName={this.filterName}/>} />

          <Route path="/charactersDetail/:id" render={(props) => <CharactersDetail match={props.match} characters={this.state.characters} />} />
        </Switch>

      </div>
    );
  }
}


export default App;
