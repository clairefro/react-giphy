import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleUpdate = (e) => {
    this.setState({
      term: e.target.value
    });
    this.props.search(e.target.value);
  }

  render() {
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        placeholder="Search gifs..."
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
