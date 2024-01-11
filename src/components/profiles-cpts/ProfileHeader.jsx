import EachProfile from "../datas/profilesDatas";

import ("./profile-header.css");

function ProfileHeader ({ profile }) {
    const singleProfile = EachProfile.find(element => element.username === profile);    
    
    return(
        <div className="profile-header">
            <div className="usernames">
                <p>{singleProfile.name}</p>
                <p>@{singleProfile.username}</p>
            </div>
            <div className="bio">
                <p>{singleProfile.bio}</p>
                <div className="additional-infos">
                    <div>
                        <img src='' alt="" />
                        <span>{singleProfile.adress}</span>
                    </div>
                    <div>
                        <img src='' alt="" />
                        <span><a href={singleProfile.link}>{singleProfile.link}</a></span>
                    </div>
                    <div>
                        <img src='' alt="" />
                        <span>Joined {singleProfile.joined}</span>
                    </div>
                </div>
                <div className="followers">
                    <p><span>{singleProfile.following}</span> following</p>
                    <p><span>{singleProfile.followers}</span> followers</p>
                </div>
            </div>
        {/* <div className="header">Profile's name</div>
        <div className="header-photo"><img src="" alt="" /></div>
        <div className="avatar"><img src="" alt="" /></div>
        <div>name</div>
        <div>@username</div>
        <div className="infos">everywhere about.x.com Joined February 2007</div>
        <div className="follow">0 Following || 67.3M Followers</div> */}
        </div>
    )
}

export default ProfileHeader;