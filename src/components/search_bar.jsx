import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (e) => {
    this.props.search(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        placeholder="Search gifs..."
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
