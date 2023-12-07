import React from 'react';
import avatarImg from '../../images/profile-photo.png';

function Avatar () {
    return (
        <div className="avatar">
            <img src={avatarImg} alt="" />
        </div>
    )
}

export default Avatar;