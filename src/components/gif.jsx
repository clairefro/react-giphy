import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/3og0IBdxsxb9zVNedW/giphy.gif";
    return (
      <img src={src} alt="" className='gif' />
    );
  }
}

export default Gif;
