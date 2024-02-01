import TweetEditorActions from "./tweetEditorActions";
import TweetButton from "./tweetButton";

function TweetEditorButtons () {
    return (
    <div className="tweet-editor-buttons">
      <TweetEditorActions/>
      <TweetButton val="Tweet"/>
     
    </div>
    )
}

export default TweetEditorButtons;