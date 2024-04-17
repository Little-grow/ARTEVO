import Stars from '../Stars/Stars';
import styles from './Products.module.css';

const Products = ({ data, pageMaximumContent, pageNumber }) => {
  const startIndex = (pageNumber - 1) * pageMaximumContent;
  const endIndex = Math.min(startIndex + pageMaximumContent, data.length);

  const pageData = data.slice(startIndex, endIndex);

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <div className={styles.productsDiv}>
          {pageData.map((item, index) => (
            <a href="#" key={index} className={styles.productsDiv__product}>
              <img
                src={item.img}
                alt={item.name}
                className={styles.productsDiv__product__img}
              />
              <div className={styles.productsDiv__product__info}>
                <div className={styles.productsDiv__product__info__text}>
                  <h4>{item.name}</h4>
                  <h5 className={styles.productsDiv__product__author}>
                    {item.author}
                  </h5>
                </div>
                <Stars />
              </div>
              <p className={styles.productsDiv__product__reviews}>
                {item.reviews}
                {')'} Customer Reviews
              </p>
              <p className={styles.productsDiv__product__price}>
                {item.price} EGP
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
