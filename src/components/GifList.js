import React from 'react';

// dumb component is just a function, it has no state, just used to show stuff
const GifList = (props) => {
  const noGifMsg = props.gifs.length <= 0 ? 'We could not find any gifs...' : '';
  return (
    <div>
      <ul>
        {
          props.gifs.map(gif => 
          <li key={ gif.id }>
            <img src={ gif.images.original.url } alt='' width='250px' />
          </li>)
        }
      </ul>
      <h2>{noGifMsg}</h2>
    </div>
  );
}

export default GifList;