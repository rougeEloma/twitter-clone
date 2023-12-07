import { NavLink } from "react-router-dom"
import homeImg from "../../images/Home-Fill.svg";
import exploreImg from "../../images/Explore.svg";
import notifImg from "../../images/Notifications.svg";
import messagesImg from "../../images/Messages.svg";
import bookmarksImg from "../../images/Bookmarks.svg";
import listImg from "../../images/Lists.svg";
import profileImg from "../../images/Profile.svg";
import moreImg from "../../images/More.svg";

function Navigation({src, url, texte}) {
  return (
    <NavLink to={url} className="navLink">
        <img src={src} />
        <p>{texte}</p>
    </NavLink>
  )
}

function NavMenu() {
    return (
      <nav>
          <ul className="sidebarOptions">        
              <li>
                  <Navigation texte={"Home"} src={homeImg} url={"/"} />
              </li>
              <li>
                  <Navigation texte={"Explore"} src={exploreImg} url={"/explore"} />
              </li>
              <li>
                  <Navigation texte={"Notifications"} src={notifImg} url={"/notifications"} />
              </li>
              <li>
                  <Navigation texte={"Messages"} src={messagesImg} url={"/booksmarks"} />
              </li>
              <li>
                  <Navigation texte={"Bookmarks"} src={bookmarksImg} url={"/bookmarks"} />
              </li>
              <li>
                  <Navigation texte={"Lists"} src={listImg} url={"/lists"} />
              </li>
              <li>
                  <Navigation texte={"Profile"} src={profileImg} url={"/profile"} />
              </li>
              <li>
                  <Navigation texte={"More"} src={moreImg} url={"/more"} />
              </li>
              
          </ul>
      </nav>
    )
  }

  export default NavMenu;