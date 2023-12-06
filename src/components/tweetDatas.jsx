import secondTweetImage from "../images/second-tweet-image.png";
import CnnLogo from "../images/cnn-logo.svg";
import roundTwitterLogo from "../images/round-twitter-logo.svg";
import newYorkTimeLogo from "../images/the_new_york.svg";


const datasOfEachTweets = [
  {
    name: "CNN",
    content:
      'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    replies: 57,
    retweets: 144,
    likes: 184,
    sent: "7ms",
    author: "@CNN",
    profileImage: CnnLogo,
  },
  {
    name: "New York Times",
    content:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    contentImage: secondTweetImage,
    replies: 19,
    retweets: 48,
    likes: 482,
    sent: "Oct 29",
    author: "@nytimes",
    profileImage: newYorkTimeLogo,
  },
  {
    name: "Twitter",
    content: "BIG NEWS lol jk still Twitter",
    replies: 68,
    retweets: 366,
    likes: 2671,
    sent: "Oct 20",
    author: "@Twitter",
    profileImage: roundTwitterLogo,
  },
  {
    name: "Twitter",
    content: "Hello literally everyone",
    replies: 187,
    retweets: 7854,
    likes: 330,
    sent: "Oct 15",
    author: "@Twitter",
    profileImage: roundTwitterLogo,
  },
  {
    name: "Twitter",
    content:
      "Hello literally everyone",
      contentImage: secondTweetImage,
    replies: 19,
    retweets: 48,
    likes: 482,
    sent: "Oct 17",
    author: "@Twitter",
    profileImage: roundTwitterLogo,
  },
];
export default datasOfEachTweets;