import Sidebar from "../sidebar-cpts/sideBar";
import Trends from "../trends-cpts/wholeTrends";

function Profile () {
    return(
        <>
        <section className="sidebar">
          <Sidebar />
        </section>
        <main className="profile">
        </main>
        
        <section className="trends">
          <Trends />
        </section>
        </>
    )
}

export default Profile;