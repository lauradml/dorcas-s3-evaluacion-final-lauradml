import React from 'react';
import List from './List';

class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
          <header className="app-header">
            <h1 className='title'>Harry Potter Characters </h1>
            <div className="filter-item">
              <input type="text" id="f-title" name="f-title" onChange={this.props.filterName} />
            </div>
          </header>
          <List characters={this.props.characters}name={this.props.name} photo={this.props.image}
          house={this.props.house}  filterName={this.props.name}/>
      </React.Fragment>
    );
  }
}

export default Home;
