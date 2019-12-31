import React, { Component } from 'react';
import giphy from 'giphy-api';

import GphApiClient from 'giphy-js-sdk-core';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import GifTitle from './gif_title';
import BGCred from './svq-bg-cred';


// set up giphy api client
const client = GphApiClient("6jGCIE3zPtfo5kpkW8W8ciNVNUATZnux");

class App extends Component {
  constructor(props) {
    super(props);

    // define changing components
    this.state = {
      gifs: [],
      // default "jif"
      selectedGifId: "FgTqKY4QECTOU",
      selectedGifTitle: null
    };
  }

  // takes query and calls giphy API to change App state (gifs)
  search = (query) => {
    // give giphy API key, search query
    client.search('gifs', {
      q: query,
      rating: 'g',
      limit: 20
    }).then((response) => {
      // update App state to include new gif object array
      this.setState({
        gifs: response.data
      });
    }).catch((err) => {
      console.log(err);
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
