import { useParams } from 'react-router-dom';
import ProfileHeader from '../components/profiles-cpts/ProfileHeader';

function Profile() {
  const userProfiles = useParams();

    return (
      <>
      <main className="profile">
        <ProfileHeader profile={userProfiles.username} />
      </main>
      </>
    );
  }
  
  export default Profile;