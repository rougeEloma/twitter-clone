import secondTweetImage from "../images/second-tweet-image.png";
import CnnLogo from "../images/cnn-logo.png";
import roundTwitterLogo from "../images/round-twitter-logo.svg";
import newYorkTimeLogo from "../images/logoNewYorkTime.svg";


const datasOfEachTweets = [
  {
    name: "CNN",
    content:
      'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    comments: 57,
    retweets: 144,
    likes: 184,
    sent: "7m",
    author: "@CNN",
    profileUser: CnnLogo,
  },
  {
    name: "New York Times",
    content:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    Img: secondTweetImage,
    comments: 19,
    retweets: 48,
    likes: 482,
    sent: "Oct 29",
    author: "@nytimes",
    profileUser: newYorkTimeLogo,
  },
  {
    name: "Twitter",
    content: "BIG NEWS lol jk still Twitter",
    comments: "6.8K",
    retweets: "36.6K",
    likes: "267.1K",
    sent: "Oct 20",
    author: "@Twitter",
    profileUser: roundTwitterLogo,
  },
  {
    name: "Twitter",
    content: "Hello literally everyone",
    comments: "18.7K",
    retweets: "785.4K",
    likes: "3.3M",
    sent: "Oct 15",
    author: "@Twitter",
    profileUser: roundTwitterLogo,
  },
  {
    name: "Twitter",
    content:
      "Hello literally everyone",
      Img: secondTweetImage,
    comments: 19,
    retweets: 48,
    likes: 482,
    sent: "Oct 17",
    author: "@Twitter",
    profileUser: roundTwitterLogo,
  },
];
export default datasOfEachTweets;