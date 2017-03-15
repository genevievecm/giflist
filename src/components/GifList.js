import React from 'react';

// dumb component is just a function, it has no state
const GifList = (props) => {
  return (
    <ul>
      {
        props.gifs.map(gif => 
        <li key={ gif.id }>
          <img src={ gif.images.original.url } alt='' />
        </li>)
      }
    </ul>
  );
}

export default GifList;
