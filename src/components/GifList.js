import React, { Component } from 'react';

export default class GifList extends Component {
  
  render() { 
    return (
      <ul>
        {this.props.gifs.map( g => 
          <li key={g.id}>
          <img src={g.images.original.url} alt='' />
          </li>
        )}
      </ul>
    );
  }
}