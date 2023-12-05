import searchIcon from "../../images/Search.svg";
import dotsMenu from "../../images/dotsMenu.svg";
import { PiSealCheckFill } from "react-icons/pi";
import CnnLogo from "../../images/cnn-logo.svg";
import roundTwitterLogo from "../../images/round-twitter-logo.svg";
import newYorkTimeLogo from "../../images/the_new_york.svg";
import settingsImg from "../../images/Settings.svg"


// trends-for-you component
const TfyBlock = () => {
    return(
        <>
        <div className="end-to-end">
            <pan>Trending in Congo</pan><img src={dotsMenu} alt="" /><span></span>
        </div>
        <h3>#WHAT?</h3>
        <div>2,000 tweets</div>
        </>
    )
}

// who-to-follow component
const WhoToFollowBlock = ({ image, name, at }) => {
    return(
        <div className="flex-it">
            <div><img src={image} alt="" className="tweet-avatar" /></div>
            <div className="whole-name"><span>{name}<PiSealCheckFill/></span><span>{at}</span></div>
            <div><button className="button white">follow</button></div>
        </div>
    )
}

function Trends() {
    return(
        <div className="positioning">

            {/* sear-bar component */}
            <div className="searchbar">
                <img src={searchIcon} alt="" />
                <input type="text" placeholder="Search"/>
            </div>

            <div className="trends-for-you">
                <div className="flex-it"><h3>Trends for you</h3><img src={settingsImg} alt="" /></div>
                <TfyBlock />
                <TfyBlock />
                <TfyBlock />
                <p>show more</p>
            </div>

            <div className="who-to-follow">
                <h3>Who To Follow</h3>
                <WhoToFollowBlock image={newYorkTimeLogo} name="New York Time" at="@nyTimes"/>
                <WhoToFollowBlock image={CnnLogo} name="CNN" at="@cnn"/>
                <WhoToFollowBlock image={roundTwitterLogo} name="Twitter" at="@Twitter"/>
                <p>show more</p>
            </div>

        </div>
)
}

export default Trends