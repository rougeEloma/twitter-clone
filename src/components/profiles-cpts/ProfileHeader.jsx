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
        <Return linkValue='/' />
        <div className="author-name">
          <div className="name">{singleProfile.name}</div>
          <div className="author-post-number">{singleProfile.posts} posts</div>
        </div>
      </div>

      <div className="banner-profile">
        <img src={singleProfile.headerPhoto} alt="banner image" />
        <div className="image-profile">
            <img src={singleProfile.profileImage} alt="profile image" />
        </div>
      </div>

      <div className="edit-profile">
        <div></div>
        <span>Edit profile</span>
      </div>

      <div className="profile-informations">
        <div className="info-name">
          <div className="name">{singleProfile.name}</div>
          <div className="username">@{singleProfile.username}</div>
        </div>
        <div className="additional-infos">
          <div className="add-info">{singleProfile.adress}</div>
          <div className="add-info"><a href={singleProfile.reallink} target="_blank">{singleProfile.link}</a></div>
          <div className="date-joined">
            <span>
              <IoCalendarOutline />
            </span>
            <div className="date">{singleProfile.joined}</div>
          </div>
        </div>
        <div className="section-follow-profile">
          <div className="following">
            <span>{singleProfile.following}</span> Following
          </div>
          <div className="follower">
            <span>{singleProfile.followers}</span> Followers
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
