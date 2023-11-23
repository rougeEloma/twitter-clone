import React from 'react';
import topTweetsImg from '../../images/top-tweets.svg';

function Header() {
  return (
    <div className="header">
      <div className='page-title'>Home</div>
      <div className='top-tweets'><img src={topTweetsImg}/></div>
    </div>
  );
}

export default Header;