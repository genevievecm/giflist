import React, { Component } from 'react';
import GifListContainer from './containers/GifListContainer';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Show me the gifs!!!</h1>
        </div>
        <GifListContainer />
      </div>
    );
  }
}