import React, { Component } from 'react';
import $ from 'jquery';
import SearchForm from '../components/SearchForm';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {

  API_URL = 'https://api.giphy.com/v1/gifs/';
  API_KEY = 'api_key=dc6zaTOxFJmzC';

  // pass props to constructor and super when you want to set an initial state
  constructor(){
    super();
    this.state = { 
      gifs: [],
      form: { search: '' },
    } 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);   
  }

  componentDidMount(){
    this.getGifs();
  }

  getGifs(param){
    let p = param ? 
      'search?q='+param+'&limit=10&' : 
      'trending?';
    $.get(this.API_URL+p+this.API_KEY)
      .then(response => {
        this.setState({ gifs: response.data })
      .catch(error => {
        console.log(error);
      });
    });
  }

  handleChange(e) {
    this.setState({
      form: { search: e.target.value }
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.getGifs(this.state.form.search);
  };

  render() {
    return (
        <div>
          <SearchForm 
            submit={ this.handleSubmit } 
            change={ this.handleChange }
            input={ this.state.form.search } 
          />
          <GifList gifs={ this.state.gifs } />
        </div>
    );
  }
}
