import React from 'react';

// component is just a function, it has no state, just used to display data
const SearchForm = (props) => {
  return (
    <form onSubmit={ props.submit }>
      <input type='text' value={ props.input } onChange={ props.change } />
      <input type='submit' value='Search' />
    </form>
  );
}

export default SearchForm;
