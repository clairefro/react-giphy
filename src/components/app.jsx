import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import BGCred from './svq-bg-cred.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // define changing components
    this.state = {
      gifs: [],
      selectedGifId: "FgTqKY4QECTOU" // default "jif"
    }
  }

  // takes query and calls giphy API to change App state (gifs)
  search = (query) => {
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

  updateSelectedGif = (selectedGifId) => {
    this.setState({
      selectedGifId
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
