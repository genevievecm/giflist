import React, { Component } from 'react';
import $ from 'jquery';
import SearchForm from '../components/SearchForm';
import GifItem from '../components/GifItem';

export default class GifListContainer extends Component {

  // API constants
  API_URL = 'https://api.giphy.com/v1/gifs/';
  API_KEY = 'api_key=dc6zaTOxFJmzC';

  constructor(){
    super();
    this.state = {  //initial state
      gifs: [],
      form: { search: '' },
      current: 'trending',
    } 

    // bind these functions to this class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);   
  }

  // when component is available in the DOM,
  // complete API request
  componentDidMount(){
    this.getGifs();

  }

  // api request
  getGifs = (param) => {
    const p = param ? 'search?q='+param+'&limit=10&' : 'trending?';
    $.get(this.API_URL+p+this.API_KEY)
      .then(response => {
        this.setState({ gifs: response.data })
      .catch(error => {
        return error;
      });
    });
  }

  // handle input change in field
  handleChange = (e) => {
    this.setState({
      form: { search: e.target.value }
    });
  };

  // handle the search form submission
  handleSubmit = (e) => {
    e.preventDefault();
    this.getGifs(this.state.form.search);
    this.setState({
      form: { search: '' },
      current: this.state.form.search !== '' ? this.state.form.search : 'trending'
    })
  };

  render() {
    // check if there are gifs, can test be searching 'corgo'
    const noGifMsg = this.state.gifs.length <= 0 ? 'We could not find any gifs...' : '';
    return (
      <div className="App">
        <h1 className="App-header">Show me the gifs!!!</h1>
        <SearchForm 
          submit={ this.handleSubmit } 
          change={ this.handleChange }
          input={ this.state.form.search } 
        />
        <h2>#{this.state.current}</h2>
        <ul>
          {this.state.gifs.map(gif => 
            <li key={ gif.id }>
              <GifItem gif={ gif } />
            </li>
          )}
        </ul>
        <h2>{noGifMsg}</h2>
      </div>
    );
  }
}