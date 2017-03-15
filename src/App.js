import React, { Component } from 'react';
import './App.css';
import GifListContainer from './containers/GifListContainer';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Show me the gifs!!!</h2>
        </div>
        <GifListContainer />
      </div>
    );
  }
}