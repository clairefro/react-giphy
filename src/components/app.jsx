import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import BGCred from './svq-bg-cred.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene" >
          <SearchBar />
          <div className="selected-gif">
            <Gif />
            <BGCred />
          </div>
        </div>
        <div className="right-scene" />
      </div>
    );
  }
}

export default App;
