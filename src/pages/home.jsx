import React from 'react';
import Header from '../components/header-cpts/header';
import TweetEditor from '../components/header-cpts/tweetEditor';
import Tweets from '../components/body-cpts/tweets';
import TweetButton from '../components/header-cpts/tweetButton';
import MenuList from '../components/sidebar-cpts/menuList';
import SideTweetButton from '../components/sidebar-cpts/sideTweetButton';

function Home() {
  return (
    <>
    <section className="sidebar">
      <MenuList/>
      <SideTweetButton />
    </section>
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets/>
    </main>
    
    <section className="trends">
      <div>searchbar</div>
      <div>Trends for you</div>
      <div>Who to follow</div>
    </section>
    </>
  );
}

export default Home;
