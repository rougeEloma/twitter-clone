
import Header from '../components/header-cpts/header';
import TweetEditor from '../components/header-cpts/tweetEditor';
import Tweets from '../components/body-cpts/tweets';
import TweetButton from '../components/header-cpts/tweetButton';
import Sidebar from '../components/sidebar-cpts/sideBar';
import Trends from '../components/trends-cpts/wholeTrends';

function Home() {
  return (
    <>
    <section className="sidebar">
      <Sidebar />
    </section>
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
    
    <section className="trends">
      <Trends />
    </section>
    </>
  );
}

export default Home;
