import styles from './Stars.module.css';

const Stars = ({ rating = 5, maximum = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maximum; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className={styles.starFilled}></span>);
    } else {
      stars.push(<span key={i} className={styles.star}></span>);
    }
  }

  return <div className={styles.stars}>{stars.map((star) => star)}</div>;
};

export default Stars;
