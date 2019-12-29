import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (e) => {
    // updateSelectedGif using function passed from grand-parent (App) through parent (GifList)
    this.props.updateSelectedGif(this.props.id);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt=""
        className='gif'
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
