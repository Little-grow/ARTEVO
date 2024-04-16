import styles from './Button.module.css';

const Button = (props) => {
  const { children, type } = props;
  if (type === 'login') {
    return <input type="submit" value={children} className={styles.login} />;
  } else if (type === 'signup') {
    return <input type="submit" value={children} className={styles.signup} />;
  } else {
    return <input type={type} value={children} />;
  }
};

export default Button;
