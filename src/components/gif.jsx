import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/uUTBFqXkRbw8p5iswz/giphy.gif";
    return (
      <img src={src} alt="" className='gif' />
    );
  }
}

export default Gif;
