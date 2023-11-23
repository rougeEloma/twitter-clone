import React from "react";
import TweetActions from "./tweetActions";
import datasOfEachTweets from "../tweetDatas";
import verified from "../../images/verified.svg";


function Tweets() {
    return (
        <div className='tweets'>
            {datasOfEachTweets.map((copyDatasOfEachTweets, index) => {
                return (
                    <div className="tweet" key={index}>

                    </div>
                )
            })

            }
        </div>
    )
}

export default Tweets;