import React from 'react';

class List extends React.Component {
  render(){
    return (
      <ul className="app__list">

      {this.props.characters.map((item, index)=>{
            return (
              <li className="app__item" key={index}>
                <img src={item.image} alt=""/>
                <h2>{ item.name}</h2>
                <p>{item.house}</p>

              </li>
            );
          })}
      </ul>

    );
  }
}

export default List;
