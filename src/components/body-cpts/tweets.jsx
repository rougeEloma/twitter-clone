import TweetActions from "./tweetActions";
import datasOfEachTweets from "../datas/tweetDatas";
import { PiSealCheckFill } from "react-icons/pi";
import {useState} from "react";
import { Link } from "react-router-dom";


function Tweets() {

    return (
        <div className='tweets'>
            {datasOfEachTweets.map((copyDatasOfEachTweets, index) => {

                const [value, setValue] = useState(copyDatasOfEachTweets.likes);
                const [btnColor, setBtnColor] = useState("like");

                const incrementCounter = () => {    
                    setValue(copyDatasOfEachTweets.likes+1)
                    setBtnColor("changed")

                }
                return (
                    <div className="tweet" key={index}>
                        <Link to={copyDatasOfEachTweets.username}><img src={copyDatasOfEachTweets.profileImage} alt="" className="tweet-avatar" /></Link>
                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    <span className="tweet-title-author">
                                        {copyDatasOfEachTweets.name}
                                        <PiSealCheckFill />
                                    </span>
                                    <span className="tweet-title-details">{copyDatasOfEachTweets.author}</span>
                                    <span className="tweet-title-details">{"."}</span>
                                    <span className="tweet-title-details">{copyDatasOfEachTweets.sent}</span>
                                </div>
                                <p className="tweet-text">
                                    {copyDatasOfEachTweets.content}
                                </p>
                                <div className="tweet-image">
                                    
                                {copyDatasOfEachTweets.contentImage && <img  src={copyDatasOfEachTweets.contentImage} /> }
                                </div>
                            </div>
                            <TweetActions
                                replies={copyDatasOfEachTweets.replies}
                                retweets={copyDatasOfEachTweets.retweets}
                                likes={value} 
                                handleClick={incrementCounter}
                                colorClassName={btnColor}/>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Tweets;