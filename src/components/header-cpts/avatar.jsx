import React from 'react';
import avatarImg from '../../images/profile-photo.png';
import { Link } from 'react-router-dom';

function Avatar () {
    return (
        <div className="avatar">
            <Link to="/johndoe"><img src={avatarImg} alt="" /></Link>
        </div>
    )
}

export default Avatar;