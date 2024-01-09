import { Link } from "react-router-dom"
import homeImg from "../../images/Home-Fill.svg";
import exploreImg from "../../images/Explore.svg";
import notifImg from "../../images/Notifications.svg";
import messagesImg from "../../images/Messages.svg";
import bookmarksImg from "../../images/Bookmarks.svg";
import listImg from "../../images/Lists.svg";
import profileImg from "../../images/Profile.svg";
import moreImg from "../../images/More.svg";

import('../../style/reset.css');
import('./side-bar.css');

// function Navigation({src, url, texte}) {
//   return (
//     <NavLink to={url} className="navLink">
//         <img src={src} />
//         <p>{texte}</p>
//     </NavLink>
//   )
// }

function NavBar() {
    return (
      <nav className="nav-bar-style">
          <ul>        
              <Link to="/"><img src={homeImg} /><li>Home</li></Link>
              <Link to="/"><img src={exploreImg} /><li>Explore</li></Link>
              <Link to="/"><img src={notifImg} /><li>Notifications</li></Link>
              <Link to="/"><img src={messagesImg} /><li>Messages</li></Link>
              <Link to="/"><img src={bookmarksImg} /><li>Bookmarks</li></Link>
              <Link to="/"><img src={listImg} /><li>Lists</li></Link>
              <Link to="/profile"><img src={profileImg} /><li>Profile</li></Link>
              <Link to="/"><img src={moreImg} /><li>More</li></Link>
          </ul>
      </nav>
    )
  }

  export default NavBar;