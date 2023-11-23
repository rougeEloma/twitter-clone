import React from 'react';
import Header from '../components/header-cpts/header';
import TweetEditor from '../components/header-cpts/tweetEditor';
import Tweets from '../components/body-cpts/tweets';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets/>
    </main>
  );
}

export default Home;
