import React from 'react';

class Card extends React.Component {
  render(){
    return (
      <div>
        <div className='container-imagen'>
          <img className='imagen-card'src={this.props.item.image} alt={this.props.item.name}/>
        </div>
        <div>
          <h2>{this.props.item.name}</h2>
          <p>{this.props.item.house}</p>
        </div>
      </div>

    );
  }
}

export default Card;
