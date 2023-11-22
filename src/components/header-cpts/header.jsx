import React from 'react';
import topTweetsImg from '../../images/top-tweets.svg';

function Header() {
  return (
    <div className="header">
      <div>Home</div>
      <div><img src={topTweetsImg}/></div>
    </div>
  );
}

export default Header;