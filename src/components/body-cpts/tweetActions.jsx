import React from "react";
import Reply from "../../images/reply.svg";
import Retweet from "../../images/retweet.svg";
import Like from "../../images/like.svg";
import Share from "../../images/share.svg";

function TweetActions ({replies, retweets, likes, handleClick, colorClassName}) {
    return (
        <div className="tweet-actions">
            <div className="tweet-action">
                <img src={Reply} alt="" className="reply"/>
                {replies}
            </div>
            <div className="tweet-action">
                <img src={Retweet} alt="" className="retweet"/>
                {retweets}
            </div>
            <div className="tweet-action">
                <img src={Like} alt="" className={colorClassName} onClick={handleClick} />
                {likes}
            </div>
            <div className="tweet-action">
                <img src={Share} alt="" className="share"/>
            </div>
        </div>
    )
}

export default TweetActions;