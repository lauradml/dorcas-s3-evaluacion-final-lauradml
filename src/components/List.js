import React from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

class List extends React.Component {
  render(){
    return (
      <ul className="app-list">

      {this.props.characters
        .filter(item => {
              return item.name.toLowerCase().includes(this.props.filterName);
            })
        .map(item=>{
            return (
              <li className='app-item' key={item.id}>
                <Link to={`/charactersDetail/${item.id}`} >
                  <Card item={item}/>
                </Link>
              </li>
            );
          })}
      </ul>

    );
  }
}

export default List;
