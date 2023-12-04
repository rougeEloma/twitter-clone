import React from 'react';
import twitterLogo from '../../images/twitter_logo.png';

function MenuList () {
    return (
        <>
        <ul className='side-menu-list'>
          <img src={twitterLogo} alt="" className='top-tweets'/>
          <li>Acceuil</li>
          <li>Explorer</li>
          <li>Notifications</li>
          <li>Messages</li>
          <li>Bookmarks</li>
          <li>Lists</li>
          <li><a>Profile</a></li>
          <li>More</li>
        </ul>
        </>
    )
}

export default MenuList;