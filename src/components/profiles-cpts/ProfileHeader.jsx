import EachProfile from "../datas/profilesDatas";
import Return from "../other-cpts/return";
import { Link } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";

import("./profile-header.css");

function ProfileHeader({ profile }) {
  const singleProfile = EachProfile.find(
    (element) => element.username === profile
  );

  return (
    <div className="profile-header">
      <div className="author-profile">
        <Return linkValue='/home' />
        <div className="author-name">
          <div className="name">{singleProfile.name}</div>
          <div className="author-post-number">{singleProfile.posts} posts</div>
        </div>
      </div>

      <div className="banner-profile">
        <img src="" alt="" />
        <div className="image-profile">
          <Link to="/home">
            <img src={singleProfile.headerPhoto} />
          </Link>
        </div>
      </div>

      <div className="edit-profile">
        <div></div>
        <span>Edit profile</span>
      </div>

      <div className="profile-informations">
        <div className="info-name">
          <div className="name">Christian mabeladi</div>
          <div className="tag">@JusticeChrisM</div>
        </div>
        <div className="date-joined">
          <span>
            <IoCalendarOutline />
          </span>
          <div className="date">Joined December 2023</div>
        </div>
        <div className="section-follow-profile">
          <div className="following">
            <span>5</span>Following
          </div>
          <div className="follower">
            <span>2</span>Follower
          </div>
        </div>
      </div>

      <div className="choice-section-profile">
        <div>
          <span>Posts</span>
        </div>
        <div>
          <span>Peplies</span>
        </div>
        <div>
          <span>Highlights</span>
        </div>
        <div>
          <span>Media</span>
        </div>
        <div>
          <span>Likes</span>
        </div>
      </div>

    </div>
  );
}

export default ProfileHeader;
