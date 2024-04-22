import styles from './ProfileWork.module.css';
import portfolioImage from '../../../public/images/profile/portfolio.png';

const ProfileWork = () => {
  const data = [
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
    { img: portfolioImage, title: 'Scented candles' },
  ];

  return (
    <section className={styles.work}>
      <div className={styles.work__filter}>
        <button className={styles.work__filter__btn}>For Sale</button>
        <button
          className={`${styles.work__filter__btn} ${styles.work__filter__btnActive}`}
        >
          Portfolio
        </button>
      </div>

      <div className={styles.work__images}>
        {data.map((item, index) => (
          <div className={styles.work__images__product}>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileWork;
