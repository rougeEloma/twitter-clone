import roundTwitterLogo from "../../images/round-twitter-logo.svg"
import avatarImg from "../../images/profile-photo.png"
import dotsMenu from "../../images/dotsMenu.svg"

function Sidebar () {
    return (
        <div className="positioning">

          {/* side-twitter-logo component */}
          <img src={roundTwitterLogo} alt="" className='tweet-avatar'/>
          <ul>
            <li>Acceuil</li>
            <li>Explorer</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Bookmarks</li>
            <li>Lists</li>
            <li><a>Profile</a></li>
            <li>More</li>
          </ul>

          {/* side-Tweet-button component */}
          <button className='side-tweet-button'>Tweet</button>

          {/* side-user-infos component */}
          <div className="side-user-info">
            <div className="profile-picture">
                <img src={avatarImg} alt="" />
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