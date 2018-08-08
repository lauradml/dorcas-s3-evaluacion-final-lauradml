import React from 'react';
import Card from './Card';

class List extends React.Component {
  render(){
    return (
      <ul className="app__list">

      {this.props.characters
        .filter(item => {
              return item.name.toLowerCase().includes(this.props.filterName);
            })
        .map((item, index)=>{
            return (
              <li className="app__item" key={index}>
                <Card item={item}/>
              </li>
            );
          })}
      </ul>

    );
  }
}

export default List;
