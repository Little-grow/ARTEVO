import Navbar from '../../components/Navbar/Navbar';
import styles from './Product.module.css';

import image1 from '../../../public/images/product/1.png';
import image2 from '../../../public/images/product/2.png';
import image3 from '../../../public/images/product/3.png';
import { useState } from 'react';

const Product = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [image1, image2, image3];
  const data = {
    name: 'Glass Vase Set',
    author: 'Eman kamel',
    description: 'high-quality opaline glass 2 pieces 10 in × 4 in',
    longDescription:
      'Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.',
    price: '650',
  };
  return (
    <>
      <Navbar logoOnly={false} />
      <main>
        <section className={styles.product}>
          <div className={styles.container}>
            <div className={styles.product__imageDiv}>
              <div className={styles.product__imageDiv__images}>
                <div className={styles.product__imageDiv__images__preview}>
                  <button
                    className={
                      activeImage === 0
                        ? styles.product__imageDiv__images__preview__imgActive
                        : styles.product__imageDiv__images__preview__img
                    }
                    onClick={() => setActiveImage(0)}
                  >
                    <img src={images[0]} alt="product" />
                  </button>
                  <button
                    className={
                      activeImage === 1
                        ? styles.product__imageDiv__images__preview__imgActive
                        : styles.product__imageDiv__images__preview__img
                    }
                    onClick={() => setActiveImage(1)}
                  >
                    <img src={images[1]} alt="product" />
                  </button>
                  <button
                    className={
                      activeImage === 2
                        ? styles.product__imageDiv__images__preview__imgActive
                        : styles.product__imageDiv__images__preview__img
                    }
                    onClick={() => setActiveImage(2)}
                  >
                    <img src={images[2]} alt="product" />
                  </button>
                </div>
                <div className={styles.product__imageDiv__images__image}>
                  <img src={images[activeImage]} alt="product" />
                </div>
              </div>
              <div className={styles.product__imageDiv__text}>
                <div>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.56672 1C3.75389 1 1.47412 3.03821 1.47412 5.55299C1.47412 9.93031 7.15345 14.1129 9.80678 15.9755C9.80931 15.9774 9.81184 15.9792 9.81438 15.981C9.83256 15.9937 9.85728 16.0119 9.87517 16.0245C10.1459 16.205 10.8113 16.6692 10.8113 16.6692C10.8113 16.6692 11.4779 16.2052 11.7475 16.0231C11.7527 16.0208 11.7604 16.0159 11.7657 16.0122C11.7697 16.0094 11.7754 16.0055 11.7794 16.0027C11.7845 15.9987 11.7895 15.9946 11.7946 15.9905C14.4397 14.1345 20.1485 9.94076 20.1485 5.55299C20.1485 3.03821 17.8687 1 15.0559 1C12.3676 1 10.8113 3.08696 10.8113 3.08696C10.8113 3.08696 9.25506 1 6.56672 1Z"
                      stroke="#161412"
                      strokeWidth="1.25"
                    />
                  </svg>
                  <p>Add to favourites</p>
                </div>
                <div>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.37228 2.30278L4.08131 4.39129L3.16351 3.54321L6.43174 0.563804L6.87546 0.159302L7.33374 0.549877L10.6243 3.35424L9.73808 4.23017L7.62228 2.42698V10.8966H6.37228V2.30278ZM0.17749 6.77199H0.80249H3.81729V8.02199H1.42749V14.391H12.411V8.02199H10.173V6.77199H13.036H13.661V7.39699V15.016V15.641H13.036H0.80249H0.17749V15.016V7.39699V6.77199Z"
                      fill="#161412"
                    />
                  </svg>
                  <p>Share</p>
                </div>
              </div>
            </div>
            <div className={styles.product__textDiv}>
              <div className={styles.product__textDiv__head}>
                <h1>{data.name}</h1>
                <p>{data.author}</p>
              </div>
              <p className={styles.product__textDiv__description}>
                {data.description}
              </p>
              <p className={styles.product__textDiv__extendedDescription}>
                {data.longDescription}
              </p>
              <hr />
              <div className={styles.product__textDiv__details}>
                <p className={styles.product__textDiv__details__price}>
                  {data.price} EGP
                </p>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="8"
                      cy="8.24793"
                      rx="4"
                      ry="5.58125"
                      stroke="#65635F"
                    />
                    <circle cx="8" cy="6.33331" r="1" stroke="#65635F" />
                  </svg>
                  <p>Ships from 6th October, Cairo, Egypt</p>
                </div>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.45557"
                      y="3.8222"
                      width="8.71111"
                      height="6.84444"
                      stroke="#65635F"
                    />
                    <path
                      d="M4.5 5.68887L7.16667 5.66664"
                      stroke="#65635F"
                      strokeLinecap="square"
                    />
                    <rect
                      x="0.833252"
                      y="1.33331"
                      width="9.95556"
                      height="2.48889"
                      stroke="#65635F"
                    />
                  </svg>
                  <p>Estimated to ship in 3 - 7 days within Egypt</p>
                </div>
                <button className={styles.product__textDiv__details__add}>
                  Add to Cart
                </button>
                <p className={styles.product__textDiv__details__terms}>
                  Taxes and shipping fees will apply upon checkout
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
