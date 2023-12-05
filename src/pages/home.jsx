
import Header from '../components/header-cpts/header';
import TweetEditor from '../components/header-cpts/tweetEditor';
import Tweets from '../components/body-cpts/tweets';
import TweetButton from '../components/header-cpts/tweetButton';
import Sidebar from '../components/sidebar-cpts/wholeSidebar';

function Home() {
  return (
    <>
    <section className="sidebar">
      <Sidebar/>
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
