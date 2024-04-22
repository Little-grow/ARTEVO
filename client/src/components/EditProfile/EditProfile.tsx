import Input from '../Input/Input';
import styles from './EditProfile.module.css';
import profileImage from '../../../public/images/profile/profile.png';

const EditProfile = ({ setEditProfile }) => {
  return (
    <section className={styles.editProfile}>
      <div className={styles.editProfile__head}>
        <h3>Edit Profile</h3>
        <img
          src={profileImage}
          alt=""
          className={styles.editProfile__head__img}
        />
      </div>
      <div className="inputs">
        <Input inputLabel="Name" label="Name" type="text" />
        <Input inputLabel="Email" label="Email" type="text" />
        <Input inputLabel="Password" label="Passowrd" type="text" />
      </div>
      <div className={styles.editProfile__buttons}>
        <button
          className={styles.editProfile__buttons__cancel}
          onClick={(e) => setEditProfile(false)}
        >
          Cancel
        </button>
        <button className={styles.editProfile__buttons__save}>Save</button>
      </div>
    </section>
  );
};

export default EditProfile;
