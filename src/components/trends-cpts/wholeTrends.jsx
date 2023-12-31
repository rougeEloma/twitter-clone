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
        <div className="flex-it">
            <span  className="little-grey">Trending in Congo</span><img src={dotsMenu} alt="" className="dots-menu"/><span></span>
        </div>
        <h3>#WHAT?</h3>
        <div  className="little-grey">2,000 tweets</div>
        </>
    )
}

// who-to-follow component
const WhoToFollowBlock = ({ image, name, at }) => {
    return(
        <div className="flex-it">
            <div><img src={image} alt="" className="tweet-avatar" /></div>
            <div className="whole-name"><span><p>{name}<PiSealCheckFill/></p></span><span className="little-grey">{at}</span></div>
            <div><button className="button-white">follow</button></div>
        </div>
    )
}

function Trends() {
    return(
        <div className="inner-trends">

            {/* sear-bar component */}
            <div className="searchbar">
                <img src={searchIcon} alt="" />
                <input type="text" placeholder="Search In Twitter"/>
            </div>

            <div className="trends-for-you">
                <div className="flex-it"><h3>Trends for you</h3><img src={settingsImg} alt="" /></div>
                <TfyBlock />
                <TfyBlock />
                <TfyBlock />
                <h4 className="show-more">show more</h4>
            </div>

            <div className="who-to-follow">
                <h3>Who To Follow</h3>
                <WhoToFollowBlock image={newYorkTimeLogo} name="New York Time" at="@nyTimes"/>
                <WhoToFollowBlock image={CnnLogo} name="CNN" at="@cnn"/>
                <WhoToFollowBlock image={roundTwitterLogo} name="Twitter" at="@Twitter"/>
                <h4 className="show-more">show more</h4>
            </div>

            <div className="footer-text">
                <p>Terms of Service &ensp; Privacy Policy &ensp; Cookie Policy</p>
                <p>Imprint &ensp; Ads Info &ensp; More ... &ensp; @ 2021 Twitter, Inc</p>
            </div>

        </div>
)
}

export default Trends