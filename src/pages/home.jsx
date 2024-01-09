import Header from '../components/header-cpts/header';
import TweetEditor from '../components/header-cpts/tweetEditor';
import Tweets from '../components/body-cpts/tweets';

import('../style/App.css');

function Home() {
  return (
    <>
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
    </>
  );
}

export default Home;
