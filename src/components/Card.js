import React from 'react';

class Card extends React.Component {
  render(){
    const{name, house, image}= this.props.item;
    return (
      <div>
        <div className='container-imagen'style={{backgroundImage:'url(' + image + ')'}}>
          <img className='imagen-card'src={image} alt={name}/>
        </div>
        <div className='description'>
          <h2>{name}</h2>
          <p>{house}</p>
        </div>
      </div>

    );
  }
}

export default Card;
