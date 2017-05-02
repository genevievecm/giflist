import React from 'react';

// component is just a function, it has no state, just used to display data
const GifItem = (props) => {
  return <img src={ props.gif.images.original.url } alt='' width='250px' />;
}

export default GifItem;