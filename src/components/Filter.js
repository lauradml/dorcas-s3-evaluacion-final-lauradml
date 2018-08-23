import React from 'react';

class Filter extends React.Component {
  render(){
    return (
      <div className="filter-item">
      <label htmlFor="name-filter">Nombre </label>
        <input type="text" id="f-title" name="f-title" onChange={this.props.filterName} placeholder="Escribe un nombre"/>
      </div>

    );
  }
}

export default Filter;
