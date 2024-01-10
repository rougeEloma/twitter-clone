import secondTweetImage from "../images/second-tweet-image.png";
import CnnLogo from "../images/cnn-logo.svg";
import roundTwitterLogo from "../images/round-twitter-logo.svg";
import newYorkTimeLogo from "../images/the_new_york.svg";


const EachProfile = [
  {
    name: "CNN",
    username: "@cnn",
    headerPhoto: "",
    bio:
      'the news channel',
    adress: "USA",
    link: "cnn.com",
    joined: "Joined February 2007",
    following: "1,085",
    followers: "62,1M",
    profileImage: CnnLogo,
  },
  {
    name: "New York Times",
    username: "@nyt",
    headerPhoto: "",
    bio:
      'the newspapers',
    adress: "USA",
    link: "nytimes.com",
    joined: "Joined March 2007",
    following: "877",
    followers: "55.1M",
    profileImage: newYorkTimeLogo,
  },
  {
    name: "Twitter",
    username: "@x",
    headerPhoto: "",
    bio:
      "what's happening?!",
    adress: "everywhere",
    link: "twitter.com",
    joined: "Joined March 2006",
    following: "0",
    followers: "67.1M",
    profileImage: roundTwitterLogo,
  },
  {
    name: "Twitter",
    content: "Hello literally everyone",
    replies: 187,
    retweets: 7854,
    likes: 33,
    sent: "Oct 15",
    author: "@Twitter",
    profileImage: roundTwitterLogo,
  }
];

export default EachProfile;