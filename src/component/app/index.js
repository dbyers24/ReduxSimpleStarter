import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchBar from '../search-bar';
const API_KEY = process.env.API_KEY; 

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <Route exact path="/" />
            <h1>something</h1>
            <SearchBar />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
