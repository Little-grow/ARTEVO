import styles from './CartItem.module.css';

const CartItem = ({ item, index }) => {
  const { img, name, weightPrice, weight } = item;
  const price = (weightPrice * weight).toFixed(2);
  return (
    <div className={styles.cartItem} key={index}>
      <div className={styles.cartItem__image}>
        <img src={img} alt="" className={styles.cartItem__image__img} />
      </div>
      <div className={styles.cartItem__description}>
        <div className={styles.cartItem__description__details}>
          <p className={styles.cartItem__description__details__name}>{name}</p>
          <p className={styles.cartItem__description__details__weightPrice}>
            ${weightPrice}/ lb
          </p>
          <div className={styles.cartItem__description__details__weightDiv}>
            <p>{weight} lb</p>
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7728 2.14867C13.1633 1.75814 13.7965 1.75814 14.187 2.14867L15.6012 3.56288C15.9918 3.9534 15.9918 4.58657 15.6012 4.97709L14.187 6.39133L11.3586 3.56295L10.6515 4.27006L13.4799 7.09844L5.20873 15.3696L1.67319 16.0767L2.3803 12.5412L12.7728 2.14867ZM1.46073 17.139L5.70174 16.2908L16.3083 5.6842C17.0894 4.90315 17.0894 3.63682 16.3083 2.85577L14.8941 1.44156C14.1131 0.660512 12.8467 0.660512 12.0657 1.44156L1.4591 12.0482L0.610897 16.2892L0.398438 17.3515L1.46073 17.139Z"
                fill="#6D6D6D"
              />
            </svg>
          </div>
        </div>
        <p className={styles.cartItem__description__price}>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
