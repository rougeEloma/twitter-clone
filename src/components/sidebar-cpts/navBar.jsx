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
              <Link to="/"><li><img src={homeImg} />Home</li></Link>
              <Link to="/"><li><img src={exploreImg} />Explore</li></Link>
              <Link to="/"><li><img src={notifImg} />Notifications</li></Link>
              <Link to="/"><li><img src={messagesImg} />Messages</li></Link>
              <Link to="/"><li><img src={bookmarksImg} />Bookmarks</li></Link>
              <Link to="/"><li><img src={listImg} />Lists</li></Link>
              <Link to="/johndoe"><li><img src={profileImg} />Profile</li></Link>
              <Link to="/"><li><img src={moreImg} />More</li></Link>
          </ul>
      </nav>
    )
  }

  export default NavBar;