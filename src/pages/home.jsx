import React from 'react';
import Header from '../components/header-cpts/header';
import TweetEditor from '../components/header-cpts/tweetEditor';
import Tweets from '../components/body-cpts/tweets';
import twitter_logo from '../images/twitter_logo.png';
import TweetButton from '../components/header-cpts/tweetButton';

function Home() {
  return (
    <>
    <section className="sidebar">
      <ul>
        <img src={twitter_logo} alt="" className='top-tweets'/>
        <li>Acceuil</li>
        <li>Explorer</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Bookmarks</li>
        <li>Lists</li>
        <li>Profile</li>
        <li>More</li>
        <TweetButton val="Poster"/>
      </ul>
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
