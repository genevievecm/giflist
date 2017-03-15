import React from 'react';

const SearchForm = (props) => {
  return (
    <form onSubmit={ props.submit }>
      <input type='text' value={ props.input } onChange={ props.change } />
      <input type='submit' value='Search' />
    </form>
  );
}

export default SearchForm;
