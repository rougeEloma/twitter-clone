import React from 'react';
import TweetEditorActions from "./tweetEditorActions";
import TweetButton from "./tweetButton";

function TweetEditorButtons () {
    return (
    <div className="tweet-editor-buttons">
      <TweetEditorActions/>
      <TweetButton/>
     
    </div>
    )
}

export default TweetEditorButtons;