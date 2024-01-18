import secondTweetImage from "../../images/second-tweet-image.png";
import CnnLogo from "../../images/cnn-logo.svg";
import roundTwitterLogo from "../../images/round-twitter-logo.svg";
import newYorkTimeLogo from "../../images/the_new_york.svg";
import johndoeLogo from "../../images/profile-photo.png"


const EachProfile = [
  {
    name: "CNN",
    username: "cnn",
    headerPhoto: "",
    posts : 1,
    bio: 'the news channel',
    adress: "USA",
    reallink: "https://cnn.com",
    link: "cnn.com",
    joined: "Joined February 2007",
    following: "1,085",
    followers: "62,1M",
    profileImage: CnnLogo,
  },
  {
    name: "New York Times",
    username: "nyt",
    headerPhoto: "",
    posts : 1,
    bio: 'the newspapers',
    adress: "USA",
    reallink: "https://nytimes.com",
    link: "nytimes.com",
    joined: "Joined March 2007",
    following: "877",
    followers: "55.1M",
    profileImage: newYorkTimeLogo,
  },
  {
    name: "Twitter",
    username: "twitter",
    headerPhoto: "",
    posts : 3,
    bio: "what's happening?!",
    adress: "everywhere",
    reallink: "https://twitter.com",
    link: "twitter.com",
    joined: "Joined March 2006",
    following: "0",
    followers: "67.1M",
    profileImage: roundTwitterLogo,
  },
  {
    name: "John Doe",
    username: "johndoe",
    headerPhoto: "",
    posts : 0,
    bio: "me",
    adress: "kinshasa",
    reallink: "https://fr.wikipedia.org/wiki/John_Doe",
    link: "johndoe.com",
    joined: "Joined Janvier 2024",
    following: "1",
    followers: "1",
    profileImage: johndoeLogo,
  }
];

export default EachProfile;