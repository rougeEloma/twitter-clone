import roundTwitterLogo from "../../images/round-twitter-logo.svg"
import littleTwitter from "../../images/Twitter.svg"
// import avatarImg from "../../images/profile-photo.png"
import dotsMenu from "../../images/dotsMenu.svg"
import NavBar from "./navBar";

import privateImg from "../../images/Private.svg"
import { Link } from "react-router-dom";

import('../../style/reset.css');
import('./side-bar.css');

function SideBar () {
    return (
        <div className="inner-sidebar">
          <Link to="/"><img src={littleTwitter} alt="" className='tweet-avatar'/></Link>

          <NavBar />

          <button className='side-tweet-button'>Tweet</button>
          
          <div className="side-user-info">
            <div className="profile-picture">
                <img src={roundTwitterLogo} alt="" />
            </div>
            <div className="user-ids">
                <h2 className="tweet-title-author">The X <img src={privateImg} alt="" /></h2>
                <p className="tweet-title-details">@ElonMusk</p>
            </div>
            <div className="more-info">
                <img src={dotsMenu} alt="" />
            </div>
        </div>
        </div>
    )
}

export default SideBar;