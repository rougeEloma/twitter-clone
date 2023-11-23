import React from "react";
import TweetActions from "./tweetActions";
import datasOfEachTweets from "../tweetDatas";
import verified from "../../images/verified.svg";


function Tweets() {
    return (
        <div className='tweets'>
            <TweetActions />
        </div>
    )
}

export default Tweets;