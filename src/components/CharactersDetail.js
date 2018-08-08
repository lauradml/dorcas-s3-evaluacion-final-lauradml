import React from 'react';
import {Link} from 'react-router-dom';

let status='';
class CharactersDetail extends React.Component {
  render(){
    if (this.props.characters[this.props.match.params.id].alive === true) {
      status = 'vivo';
    } else {
      status = 'muerto';
    }
    if (this.props.characters.length === 0) {
      return null;
    } else {
      return (
        <li>
          <img src={this.props.characters[this.props.match.params.id].image}/>
          <h2>{this.props.characters[this.props.match.params.id].name}</h2>
          <p>Casa: {this.props.characters[this.props.match.params.id].house}</p>
          <p>Nacimiento:{this.props.characters[this.props.match.params.id].yearOfBirth}</p>
          <p>Patronuis:  {this.props.characters[this.props.match.params.id].patronus}</p>
          <p>estado:{status} </p>
          <Link to="/" className="back-btn">Volver</Link>
        </li>
      );
    }
  }
}
export default CharactersDetail;
