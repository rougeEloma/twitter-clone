import EachProfile from "../profilesDatas";

function ProfileHeader () {
    return(
        <>
        <div className="header">Profile's name</div>
        <div className="header-photo"><img src="" alt="" /></div>
        <div className="avatar"><img src="" alt="" /></div>
        <div>name</div>
        <div>@username</div>
        <div className="infos">everywhere about.x.comJoined February 2007</div>
        <div className="follow">0 Following || 67.3M Followers</div>
        </>
    )
}

export default ProfileHeader;