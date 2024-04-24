import styles from './Cart.module.css';
import Navbar from '../../components/Navbar/Navbar';
import CartItem from '../../components/CartItem/CartItem';

const Cart = ({ data, renderTime }) => {
  const count = data.length;
  const totalPrice = data.reduce((acc, item) => {
    const price = item.weightPrice * item.weight;
    return acc + price;
  }, 0);
  const tax = 2.0;
  const shipping = 3.99;
  console.log(
    'Cart rendered in: ',
    renderTime ? renderTime.toFixed(2) : 0,
    'ms',
  );
  return (
    <>
      <Navbar logoOnly={false} />
      <main>
        <div className={styles.container}>
          <div className={styles.description}>
            <h2 className={styles.description__head}>Cart</h2>
            <p className={styles.description__count}>{count} items</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.content}>
            <div className={styles.content__cartItems}>
              {data.map((item, index) => (
                <CartItem item={item} index={index} />
              ))}
            </div>
            <div className={styles.content__orderSummary}>
              <h2 className={styles.content__orderSummary__head}>
                Order summary
              </h2>
              <div className={styles.content__orderSummary__summary}>
                <div
                  className={styles.content__orderSummary__summary__subtotal}
                >
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div
                  className={styles.content__orderSummary__summary__shipping}
                >
                  <p>Shipping</p>
                  <p>${shipping}</p>
                </div>
                <div className={styles.content__orderSummary__summary__tax}>
                  <p>Tax</p>
                  <p>${tax}</p>
                </div>

                <div className={styles.content__orderSummary__summary__total}>
                  <p>Total</p>
                  <p>${(totalPrice + tax + shipping).toFixed(2)}</p>
                </div>
              </div>
              <button
                className={styles.content__orderSummary__summary__proceed}
              >
                <p>Continue to payment</p>
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 7H16M16 7L10 1M16 7L10 13" stroke="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
