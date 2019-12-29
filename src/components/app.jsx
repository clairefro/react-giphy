import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import GifTitle from './gif_title.jsx';
import BGCred from './svq-bg-cred.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // define changing components
    this.state = {
      gifs: [],
      // default "jif"
      selectedGifId: "FgTqKY4QECTOU",
      selectedGifTitle: null
    }
  }

  // takes query and calls giphy API to change App state (gifs)
  search = (query) => {
    // give giphy API key, search query
    giphy('6jGCIE3zPtfo5kpkW8W8ciNVNUATZnux').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (err, result) => {
      // result is the answer from api
      // now update App > gifs state
      this.setState({
        gifs: result.data
      });
    });
  }

  updateSelectedGif = (selectedGifId, selectedGifTitle) => {
    this.setState({
      selectedGifId,
      selectedGifTitle
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          {/* pass search function from App comp to SearchBar comp */}
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
            <GifTitle title={this.state.selectedGifTitle} />
            <BGCred />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateSelectedGif={this.updateSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
