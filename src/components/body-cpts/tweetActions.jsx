import React from "react";
import Reply from "../../images/reply.svg";
import Retweet from "../../images/retweet.svg";
import Like from "../../images/like.svg";
import Share from "../../images/share.svg";

function TweetActions ({replies, retweets, likes}) {
    return (
        <div className="tweet-actions">
            <div className="tweet-actions">
                <img src={Reply} alt="" />
                {replies}
            </div>
            <div className="tweet-actions">
                <img src={Retweet} alt="" />
                {retweets}
            </div>
            <div className="tweet-actions">
                <img src={Like} alt="" />
                {likes}
            </div>
            <div className="tweet-actions">
                <img src={Share} alt="" />
            </div>
        </div>
    )
}

export default TweetActions;