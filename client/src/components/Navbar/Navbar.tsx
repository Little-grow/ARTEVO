import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

type propsType = {
  logoOnly: boolean;
};

const Navbar = (props: propsType) => {
  const { logoOnly } = props || false;
  if (logoOnly) {
    return (
      <nav>
        <div className={styles.container}>
          <div>
            <a href="#" className={styles.logo}>
              artevo
            </a>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <div className={styles.container}>
        <div>
          <NavLink to="/" className={styles.logo}>
            artevo
          </NavLink>
        </div>
        <div className={styles.options}>
          <div className={styles.links}>
            <label htmlFor={styles.menu}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 7H19" stroke="#222222" strokeLinecap="round" />
                <path d="M5 12H19" stroke="#222222" strokeLinecap="round" />
                <path d="M5 17H19" stroke="#222222" strokeLinecap="round" />
              </svg>
            </label>
            <input type="checkbox" id={styles.menu} />

            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/new">NEW PROJECT</NavLink>
              </li>
              <li>
                <NavLink to="/store?page=1">STORE</NavLink>
              </li>
              {/* <li>
                <NavLink to="/artists">ARTISTS</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li> */}
            </ul>
          </div>
          <div className={styles.icons}>
            <ul>
              <li>
                <a href="">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5853 3.46918C6.87309 3.46918 3.8551 6.45352 3.8551 10.1469C3.8551 13.8403 6.87309 16.8246 10.5853 16.8246C12.1201 16.8246 13.5363 16.3144 14.6696 15.4549L19.4921 20.2359L20.3722 19.3482L15.5923 14.6095C16.6632 13.4275 17.3154 11.8638 17.3154 10.1469C17.3154 6.45352 14.2974 3.46918 10.5853 3.46918ZM5.1051 10.1469C5.1051 7.15402 7.55326 4.71918 10.5853 4.71918C13.6173 4.71918 16.0654 7.15402 16.0654 10.1469C16.0654 13.1398 13.6173 15.5746 10.5853 15.5746C7.55326 15.5746 5.1051 13.1398 5.1051 10.1469Z"
                      fill="#161412"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <NavLink to="/cart">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.54335 3.375H2.80933V4.625H5.07108L7.90819 14.6189L8.03717 15.0732H8.50943H19.9713H20.4326L20.5686 14.6325L23.0822 6.48349L23.3318 5.67427H22.485H8.50943V6.92427H21.6381L19.5101 13.8232H8.9817L6.14459 3.82932L6.01561 3.375H5.54335ZM10.3023 17.1964C9.68737 17.1964 9.19812 17.6892 9.19812 18.2857C9.19812 18.8822 9.68737 19.375 10.3023 19.375C10.9172 19.375 11.4064 18.8822 11.4064 18.2857C11.4064 17.6892 10.9172 17.1964 10.3023 17.1964ZM7.94812 18.2857C7.94812 16.9887 9.0072 15.9464 10.3023 15.9464C11.5973 15.9464 12.6564 16.9887 12.6564 18.2857C12.6564 19.5827 11.5973 20.625 10.3023 20.625C9.0072 20.625 7.94812 19.5827 7.94812 18.2857ZM18.3716 17.1964C17.7567 17.1964 17.2674 17.6892 17.2674 18.2857C17.2674 18.8822 17.7567 19.375 18.3716 19.375C18.9865 19.375 19.4757 18.8822 19.4757 18.2857C19.4757 17.6892 18.9865 17.1964 18.3716 17.1964ZM16.0174 18.2857C16.0174 16.9887 17.0765 15.9464 18.3716 15.9464C19.6666 15.9464 20.7257 16.9887 20.7257 18.2857C20.7257 19.5827 19.6666 20.625 18.3716 20.625C17.0765 20.625 16.0174 19.5827 16.0174 18.2857Z"
                      fill="#161412"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <a href="">
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
                      d="M8.55299 4C6.03821 4 4 6.03821 4 8.55299C4 12.9303 9.07755 17.1129 11.4497 18.9755C11.452 18.9774 11.4543 18.9792 11.4565 18.981C11.4728 18.9937 11.4949 19.0119 11.5109 19.0245C11.7529 19.205 12.3478 19.6692 12.3478 19.6692C12.3478 19.6692 12.9437 19.2052 13.1848 19.0231C13.1895 19.0208 13.1964 19.0159 13.2011 19.0122C13.2047 19.0094 13.2097 19.0055 13.2133 19.0027C13.2179 18.9987 13.2224 18.9946 13.2269 18.9905C15.5917 17.1345 20.6957 12.9408 20.6957 8.55299C20.6957 6.03821 18.6574 4 16.1427 4C13.7392 4 12.3478 6.08696 12.3478 6.08696C12.3478 6.08696 10.9565 4 8.55299 4Z"
                      stroke="#161412"
                      strokeWidth="1.25"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <NavLink to="/profile">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="#272D4E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#272D4E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
