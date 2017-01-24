import React, { Component } from 'react';
import $ from 'jquery';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {

  constructor(props){
    super(props);
    this.state = { gifs: [] }    
  }

  componentDidMount(){
     $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q=corgi+puppy&limit=5&api_key=dc6zaTOxFJmzC",
      dataType: 'json',
      success: function(gifs) {
        this.setState({gifs: gifs.data});
        console.log(gifs.data);
      }.bind(this)
    });
  }

  render() {
    return (
        <GifList gifs={this.state.gifs} />
    );
  }
}