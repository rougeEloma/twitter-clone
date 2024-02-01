import Reply from "../../images/reply.svg";
import Retweet from "../../images/retweet.svg";
import Like from "../../images/like.svg";
import Share from "../../images/share.svg";
import { useContext } from "react";
import TweetAction from "./tweetAction";
import { TweetContext } from "../contexts/TweetContext";

function TweetActions() {
  const tweet = useContext(TweetContext)
  return ( 
      <div className="tweet-actions">
          <span className="tweet-action reply-action"title="Comments">
              <img src={Reply} alt="" />
              {tweet.commentsNumber}
          </span>
          <TweetAction
             action={tweet.likesNumber}
             icon={Like}
             extraClass='like-action'
             title="Likes" 
          />
          <TweetAction
             action={tweet.retweetsNumber}
             icon={Retweet}
             extraClass='retweet-action'
             title="Retweets" 
          />
          <span className="tweet-action reply-action" title="Share">
              <img src={Share} alt="" />
          </span>
      </div>
       );
}

export default TweetActions;