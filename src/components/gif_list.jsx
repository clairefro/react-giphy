import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  renderList = ({ gifs, updateSelectedGif }) => {
    return gifs.map(gif => <Gif id={gif.id} gifTitle={gif.title} updateSelectedGif={updateSelectedGif} key={gif.id} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList(this.props)}
      </div>
    );
  }
}

export default GifList;
