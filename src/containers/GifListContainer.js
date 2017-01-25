import React, { Component } from 'react';
import $ from 'jquery';
import GifList from '../components/GifList';

// const initialState = {
//   search: ''
// }

export default class GifListContainer extends Component {

  //pass props to constructor and super when you want to set an initial state
  constructor(){
    super();
    this.state = { 
      gifs: [],
      form: {
        search: ''
      }
    } 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);   
  }

  componentDidMount(){
     $.get('http://api.giphy.com/v1/gifs/search?q=funny+corgi&limit=5&api_key=dc6zaTOxFJmzC')
      .then(response => {
        this.setState({
          gifs: response.data,
        });
    });
  }

  handleChange(event) {
    this.setState({
      form: {
        search: event.target.value
      }
    })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.form.search);
    event.preventDefault();
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.form.search} onChange={this.handleChange} />
            <input type='submit' value='Search' />
          </form>
          <GifList gifs={this.state.gifs} />
        </div>
    );
  }
}

//containers can correspond with routes