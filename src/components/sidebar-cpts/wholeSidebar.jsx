import roundTwitterLogo from "../../images/round-twitter-logo.svg"

function Sidebar () {
    return (
        <>
        <img src={roundTwitterLogo} alt="" className='tweet-avatar'/>
        <ul>
          <li>Acceuil</li>
          <li>Explorer</li>
          <li>Notifications</li>
          <li>Messages</li>
          <li>Bookmarks</li>
          <li>Lists</li>
          <li><a>Profile</a></li>
          <li>More</li>
        </ul>
        <button className='side-tweet-button'>Tweet</button>
        </>
    )
}

export default Sidebar;