import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../component/search-bar';
import VideoList from '../component/video-list'

const API_KEY = process.env.API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });

  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <Route exact path="/" />
            <h1>something</h1>
            <SearchBar />
            {console.log(this.state.videos)}
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
