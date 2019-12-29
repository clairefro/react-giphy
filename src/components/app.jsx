import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import BGCred from './svq-bg-cred.jsx';

class App extends Component {
  render() {
    // define gif array
    const gifs = [
      { id: "l41lLVwbg5bfykLPa" },
      { id: "YmDNxawTergvm"},
      { id: "59QDqizvIzida"}
    ]
    return (
      <div>
        <div className="left-scene" >
          <SearchBar />
          <div className="selected-gif">
            <Gif id="l41lLVwbg5bfykLPa"/>
            <BGCred />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
