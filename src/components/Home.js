import React from 'react';
import List from './List';

class Home extends React.Component {
  render(){
    return (
    <div>
          <List characters={this.props.characters}name={this.props.name} photo={this.props.image} house={this.props.house} />
    </div>
    );
  }
}

export default Home;
