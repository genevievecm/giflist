import React, { Component } from 'react';
import $ from 'jquery';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {

  constructor(){
    super();
    this.state = { gifs: [] }    
  }

  componentDidMount(){
     $.get('http://api.giphy.com/v1/gifs/search?q=funny+corgi&limit=5&api_key=dc6zaTOxFJmzC')
      .then(response => {
        this.setState({
          gifs: response.data,
        });
    });
  }

  render() {
    return (
        <GifList gifs={this.state.gifs} />
    );
  }
}