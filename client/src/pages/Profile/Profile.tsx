import { useState } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import Navbar from '../../components/Navbar/Navbar';
import ProfileData from '../../components/ProfileData/ProfileData';
import ProfileWork from '../../components/ProfileWork/ProfileWork';
import styles from './Profile.module.css';

const Profile = ({ renderTime }) => {
  const [editProfile, setEditProfile] = useState(false);
  console.log(renderTime ? renderTime.toFixed(2) : 0);
  return (
    <>
      <Navbar logoOnly={false} />
      <section className={styles.profile}>
        <div className={styles.container}>
          <ProfileData setEditProfile={setEditProfile} />
          <ProfileWork />
        </div>
        {editProfile && <EditProfile setEditProfile={setEditProfile} />}
      </section>
    </>
  );
};

export default Profile;
