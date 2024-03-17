import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Signup.module.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleKeyDown(event) {
    console.log(event.key);
    if (event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      setShowPassword((prevState) => !prevState);
    }
    event.target.focus();
  }
  return (
    <>
      <header>
        <Navbar logoOnly={true} />
      </header>
      <main>
        <div className={styles.container}>
          <form action="">
            <h2>Welcome to Our Community </h2>
            <p>Already have an account? Log in </p>
            <div className={styles.inputDiv}>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="">Username</label>
              <input type="text" />
            </div>

            <div className={styles.inputDiv}>
              <input
                type="checkbox"
                id={styles.showHide}
                className={styles.check}
                onChange={(e) => setShowPassword(e.target.checked)}
                checked={showPassword}
              />
              <div className={styles.toggleLine}>
                <label htmlFor="">Password</label>
                <div className={styles.showToggle}>
                  <label
                    htmlFor={styles.showHide}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={showPassword ? 'false' : 'true'}
                    onKeyDown={handleKeyDown}
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0194 4.88129L19.2835 4.14535C19.0755 3.93736 18.6915 3.96937 18.4515 4.25731L15.8913 6.80128C14.7392 6.30533 13.4754 6.06533 12.1473 6.06533C8.19519 6.08127 4.77141 8.38524 3.12329 11.6974C3.02726 11.9054 3.02726 12.1614 3.12329 12.3374C3.89122 13.9054 5.04329 15.2014 6.4833 16.1774L4.3873 18.3053C4.1473 18.5453 4.11529 18.9293 4.27534 19.1373L5.01128 19.8733C5.21928 20.0812 5.60326 20.0492 5.84326 19.7613L19.8912 5.7134C20.1952 5.47354 20.2272 5.08958 20.0192 4.88156L20.0194 4.88129ZM12.9953 9.71318C12.7233 9.64916 12.4353 9.5692 12.1633 9.5692C10.8033 9.5692 9.71538 10.6572 9.71538 12.0171C9.71538 12.2891 9.7794 12.5771 9.85935 12.8491L8.78724 13.9051C8.46728 13.3452 8.2913 12.7211 8.2913 12.0172C8.2913 9.88919 10.0033 8.17717 12.1313 8.17717C12.8354 8.17717 13.4593 8.35315 14.0193 8.67311L12.9953 9.71318Z"
                        fill="#666666"
                        fillOpacity="1"
                      />
                      <path
                        d="M21.1714 11.6974C20.6114 10.5774 19.8753 9.56942 18.9634 8.75339L15.9874 11.6974V12.0174C15.9874 14.1453 14.2754 15.8574 12.1474 15.8574H11.8274L9.93945 17.7453C10.6435 17.8893 11.3795 17.9853 12.0995 17.9853C16.0516 17.9853 19.4754 15.6814 21.1235 12.3532C21.2675 12.1292 21.2675 11.9052 21.1714 11.6972L21.1714 11.6974Z"
                        fill="#666666"
                        fillOpacity="1"
                      />
                    </svg>
                    <p>Show</p>
                  </label>
                  <label
                    htmlFor={styles.showHide}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={showPassword ? 'true' : 'false'}
                    onKeyDown={handleKeyDown}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.97924 10.2709C4.36454 8.19808 7.26851 5 12 5C16.7314 5 19.6354 8.19808 21.0207 10.2709C21.4855 10.9665 21.718 11.3143 21.6968 11.9569C21.6757 12.5995 21.4088 12.9469 20.8752 13.6417C19.2861 15.7107 16.1129 19 12 19C7.88699 19 4.71384 15.7107 3.12471 13.6417C2.59106 12.9469 2.32424 12.5995 2.30308 11.9569C2.28193 11.3143 2.51436 10.9665 2.97924 10.2709ZM11.9999 16C14.2091 16 15.9999 14.2091 15.9999 12C15.9999 9.79086 14.2091 8 11.9999 8C9.79081 8 7.99995 9.79086 7.99995 12C7.99995 14.2091 9.79081 16 11.9999 16Z"
                        fill="#222222"
                      />
                    </svg>
                    <p>Hide</p>
                  </label>
                </div>
              </div>

              <input
                type={showPassword ? 'text' : 'password'}
                id={styles.password}
              />

              <div className={styles.constraints}>
                <div className={styles.constrain}>
                  <div className="circle"></div>
                  <p>Use 8 or more characters</p>
                </div>
                <div className={styles.constrain}>
                  <div className="circle"></div>
                  <p>One Uppercase character</p>
                </div>
                <div className={styles.constrain}>
                  <div className="circle"></div>
                  <p>One lowercase character</p>
                </div>
                <div className={styles.constrain}>
                  <div className="circle"></div>
                  <p>One special character</p>
                </div>
                <div className={styles.constrain}>
                  <div className="circle"></div>
                  <p>One number</p>
                </div>
              </div>
            </div>

            <div className={styles.terms}>
              <input type="checkbox" id={styles.check} />
              <label htmlFor={styles.check}>
                By creating an account, you agree to the Terms of use and
                Privacy Policy.
              </label>
            </div>

            <input
              type="submit"
              value="Create an account"
              className={styles.submit}
            />
          </form>
          <div className={styles.image}>
            <img src="images/signImage.jpeg" alt="555" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
