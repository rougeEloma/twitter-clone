import React from 'react';
import topTweetsImg from '../../images/top-tweets.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/"><div className='page-title'>Home</div></Link>
      <div className='top-tweets'><img src={topTweetsImg}/></div>
    </div>
  );
}

export default Header;