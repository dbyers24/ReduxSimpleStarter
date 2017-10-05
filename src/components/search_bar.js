import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <input onChange  = {this.handleInputChange} />; 
  }
  handleInputChange(e) {
    console.log(e.target.value);
  }
}

export default SearchBar;
