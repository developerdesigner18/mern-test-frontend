import React from 'react';

export const Header = (props: any) => {
  return (
    <div>
      <ul>
        <li>
          <a className='active' href='#home'>
            Home
          </a>
        </li>
        <li>
          <a href='#news'>News</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li style={{ float: 'right' }}>
          <div className='profile'>T</div>
        </li>
      </ul>
    </div>
  );
};
