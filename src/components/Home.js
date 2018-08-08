import React from 'react';
import List from './List';
import Filter from './Filter';

class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
          <header className="app-header">
            <h1 className='title'>Harry Potter Characters </h1>
            <Filter filterName={this.props.filterName}/>
          </header>
          <List characters={this.props.characters}name={this.props.name} photo={this.props.image}
          house={this.props.house}  filterName={this.props.name}/>
      </React.Fragment>
    );
  }
}

export default Home;
