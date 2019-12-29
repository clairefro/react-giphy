import React, { Component } from 'react';

class GifTitle extends Component {
  deGiffedTitle = (title) => {
    if (title) {
      return title.replace(/GIF\s?/, '');
    }
    return '';
  }

  render() {
    return (
      <h3 className="gif-title">{this.deGiffedTitle(this.props.title)}</h3>
    );
  }
}

export default GifTitle;
