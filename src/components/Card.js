import React from 'react';

class Card extends React.Component {
  render(){
    return (
      <div>
        <img src={this.props.item.image} alt=""/>
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.house}</p>
      </div>

    );
  }
}

export default Card;
