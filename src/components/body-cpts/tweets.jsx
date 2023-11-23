import React from "react";
import TweetActions from "./tweetActions";
import datasOfEachTweets from "../tweetDatas";
import { PiSealCheckFill } from "react-icons/pi";


function Tweets() {
    return (
        <div className='tweets'>
            {datasOfEachTweets.map((copyDatasOfEachTweets, index) => {
                return (
                    <div className="tweet" key={index}>
                        <img src={copyDatasOfEachTweets.profileImage} alt="" className="tweet-avatar" />
                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    <span className="tweet-title-author">
                                        {copyDatasOfEachTweets.author} <span><PiSealCheckFill /></span>
                                    </span>
                                    <span className="tweet-title-details">{copyDatasOfEachTweets.sent}</span>
                                </div>
                                <div className="tweet-text">
                                    {copyDatasOfEachTweets.content}
                                </div>
                                <div className="tweet-image">
                                    {copyDatasOfEachTweets.contentImage}
                                </div>
                            </div>
                            <TweetActions 
                                replies={copyDatasOfEachTweets.replies}
                                retweets={copyDatasOfEachTweets.retweets}
                                likes={copyDatasOfEachTweets.likes}/>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Tweets;