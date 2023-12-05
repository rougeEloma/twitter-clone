import roundTwitterLogo from "../../images/round-twitter-logo.svg"
import littleTwitter from "../../images/Twitter.svg"
// import avatarImg from "../../images/profile-photo.png"
import dotsMenu from "../../images/dotsMenu.svg"
import homeImg from "../../images/Home-Fill.svg";
import exploreImg from "../../images/Explore.svg";
import notifImg from "../../images/Notifications.svg";
import messagesImg from "../../images/Messages.svg";
import bookmarksImg from "../../images/Bookmarks.svg";
import listImg from "../../images/Lists.svg";
import profileImg from "../../images/Profile.svg";
import moreImg from "../../images/More.svg";

function Sidebar () {
    return (
        <div className="positioning">

          {/* side-twitter-logo component */}
          <img src={littleTwitter} alt="" className='tweet-avatar'/>
          <ul>
            <li><img src={homeImg} alt=""/> <span>Acceuil</span></li>
            <li><img src={exploreImg} alt=""/> <span>Explorer</span></li>
            <li><img src={notifImg} alt=""/> <span>Notifications</span></li>
            <li><img src={messagesImg} alt=""/> <span>Messages</span></li>
            <li><img src={bookmarksImg} alt=""/> <span>Bookmarks</span></li>
            <li><img src={listImg} alt=""/> <span>Lists</span></li>
            <li><img src={profileImg} alt=""/> <span>Profile</span></li>
            <li><img src={moreImg} alt=""/> <span>More</span></li>
          </ul>

          {/* side-Tweet-button component */}
          <button className='side-tweet-button'>Tweet</button>

          {/* side-user-infos component */}
          <div className="side-user-info">
            <div className="profile-picture">
                <img src={roundTwitterLogo} alt="" />
            </div>
            <div className="user-ids">
                <h2 className="tweet-title-author">The X</h2>
                <p className="tweet-title-details">@ElonMusk</p>
            </div>
            <div className="more-info">
                <img src={dotsMenu} alt="" />
            </div>
        </div>
        </div>
    )
}

export default Sidebar;