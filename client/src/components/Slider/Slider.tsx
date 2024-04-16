import { useEffect, useState } from 'react';
import styles from './Slider.module.css';

const Slider = ({ data, art }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 992) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const dataLength = data.length;

  const handlePrev = () => {
    setStartIndex((index) => (index - 1 + dataLength) % dataLength);
  };

  const handleNext = () => {
    setStartIndex((index) => (index + 1) % dataLength);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContainer__slider}>
        <button
          className={styles.sliderContainer__slider__previous}
          onClick={handlePrev}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 1L1 7L7 13" stroke="#222222" />
          </svg>
        </button>
        <div className={styles.sliderContainer__slider__items}>
          {startIndex + itemsToShow <= dataLength
            ? data
                .slice(startIndex, startIndex + itemsToShow)
                .map((item, index) => (
                  <>
                    {art && <Art item={item} index={index} />}
                    {!art && (
                      <div key={index} className="item">
                        {item}
                      </div>
                    )}
                  </>
                ))
            : [
                ...data.slice(startIndex),
                ...data.slice(0, startIndex + itemsToShow - dataLength),
              ].map((item, index) => (
                <>
                  {art && <Art item={item} index={index} />}
                  {!art && (
                    <div key={index} className="item">
                      {item}
                    </div>
                  )}
                </>
              ))}
        </div>

        <button
          className={styles.sliderContainer__slider__next}
          onClick={handleNext}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L1 13" stroke="#222222" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;

const Art = ({ item, index }) => {
  const { img, name, author, description } = item;
  return (
    <div className={styles.sliderContainer__slider__items__item} key={index}>
      <img src={img} alt={name} />
      <h3 className={styles.sliderContainer__slider__items__item__name}>
        {name}
      </h3>
      <p className={styles.sliderContainer__slider__items__item__author}>
        {author}
      </p>
      <p className={styles.sliderContainer__slider__items__item__description}>
        {description}
      </p>
    </div>
  );
};
