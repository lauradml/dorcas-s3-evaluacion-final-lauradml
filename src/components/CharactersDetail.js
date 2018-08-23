import React from 'react';
import {Link} from 'react-router-dom';

let status='';
let casa='';
class CharactersDetail extends React.Component {
  render(){

  const {image, name, yearOfBirth, patronus, alive , house} = this.props.characters[this.props.match.params.id];
    if (alive === true) {
      status = 'vivo';
    } else {
      status = 'muerto 🧟';
    }
    if (this.props.characters.length === 0) {
      return null;
    }

    if(house === 'Slytherin'){
      casa = 'Slytherin 🐍';
    }
    else if(house === 'Gryffindor'){
        casa = 'Gryffindor 🦁';
    }
    else if(house === 'Ravenclaw'){
        casa = 'Ravenclaw 🦅';
    }
    else if(house === 'Hufflepuff'){
        casa = 'Hufflepuff 🐿 ';
    }else{
      casa='no tiene casa 🤷'
    }

      return (
        <div className='container-detail'>
          <div className='app-item-detail'>
            <div className='container-imagen-detail'style={{backgroundImage:'url(' + image + ')'}}>
              <img className='imagen-detail' src={image}alt=""/>
              </div>
            <div className='description-detail'>
              <h2 className='title-detail'>{name}</h2>
              <p>Casa:{casa}</p>
              <p>Nacimiento:{yearOfBirth}</p>
              <p>Patronuis:{patronus}</p>
              <p>estado:{status} </p>
              <Link to="/" className="back-btn"> Volver </Link>
            </div>
          </div>
        </div>
      );
    }
  }

export default CharactersDetail;
