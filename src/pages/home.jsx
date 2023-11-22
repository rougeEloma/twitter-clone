import React from 'react';
import Header from '../components/header-cpts/header';
import TweetEditor from '../components/header-cpts/tweetEditor';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
    </main>
  );
}

export default Home;
