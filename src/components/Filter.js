import React from 'react';

class Filter extends React.Component {
  render(){
    return (
      <div className="filter-item">
        <input type="text" id="f-title" name="f-title" onChange={this.props.filterName} />
      </div>

    );
  }
}

export default Filter;
