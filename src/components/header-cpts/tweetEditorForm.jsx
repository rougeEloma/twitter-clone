import TweetEditorInput from './tweetEditorInput';
import TweetEditorButtons from './tweetEditorButtons';


function TweetEditorForm() {
  return (
    <div className="tweet-editor-form">
        <TweetEditorInput />
        <TweetEditorButtons/>
    </div>
  );
}

export default TweetEditorForm;