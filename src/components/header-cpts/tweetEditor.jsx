import Avatar from './avatar';
import TweetEditorForm from './tweetEditorForm';

function TweetEditor () {
    return (
      <div className="tweet-editor">
          <Avatar />
          <TweetEditorForm />
      </div>
    );
}

export default TweetEditor;