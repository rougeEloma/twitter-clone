import Header from '../components/header-cpts/header';
import TweetEditor from '../components/header-cpts/tweetEditor';
import Tweets from '../components/body-cpts/tweets';
import TweetButton from '../components/header-cpts/tweetButton';
import SideBar from '../components/sidebar-cpts/SideBar';
import Trends from '../components/trends-cpts/Trends';


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
