import Slider from '../Slider/Slider';
import styles from './FeaturedPieces.module.css';

import image1 from '../../../public/images/featured_pieces/1.png'; // Import image files
import image2 from '../../../public/images/featured_pieces/2.png'; // Import image files
import image3 from '../../../public/images/featured_pieces/3.png'; // Import image files
import image4 from '../../../public/images/featured_pieces/4.png'; // Import image files
import image5 from '../../../public/images/featured_pieces/5.png'; // Import image files

const FeaturedPieces = () => {
  const data = [
    {
      img: image1,
      name: 'Innocence',
      author: 'Mariam Said',
      description: 'Oil on canvas, 2008',
    },
    {
      img: image2,
      name: 'Wallowing Breeze',
      author: 'Tariq Ahmed',
      description: 'Oil on canvas, 2008',
    },
    {
      img: image3,
      name: 'J Resistance',
      author: 'Fatima Abbas',
      description: 'Gouache on paper, 2018',
    },
    {
      img: image4,
      name: 'Warm Basket',
      author: 'Nadia Salem',
      description: 'Acrylic on wood, 2014',
    },
    {
      img: image5,
      name: 'The Vonnegut',
      author: 'Nadia Salem',
      description: 'Oil on canvas, 2018',
    },
  ];
  return (
    <section className={styles.featuredPieces}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.head__header}>Featured Pieces</h2>
          <svg
            width="38"
            height="18"
            viewBox="0 0 38 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.3265 16.8046L28.886 17.248L27.9992 16.3671L28.4396 15.9237L34.8119 9.5082L1.49418 9.24998L0.744202 9.24417L0.755829 7.74422L1.50581 7.75003L34.8755 8.00864L28.8685 1.53952L28.4432 1.08152L29.3592 0.230957L29.7845 0.688952L36.8889 8.33984L37.2973 8.77969L36.8743 9.20557L29.3265 16.8046Z"
              fill="#161412"
            />
          </svg>
        </div>
        <div className={styles.content}>
          <Slider data={data} art={true}></Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPieces;
