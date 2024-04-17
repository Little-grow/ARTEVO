import styles from './PageSlider.module.css';

const PagesSlider = ({ pageNumber, setSearchParams, pages }) => {
  const visiblePages = 5; // Number of visible page buttons

  const handlePrev = () => {
    console.log(pageNumber);
    if (pageNumber > 1) {
      setSearchParams({ page: String(pageNumber - 1) });
    }
  };

  const handleNext = () => {
    console.log(pageNumber);
    if (pageNumber < pages) {
      setSearchParams({ page: String(pageNumber + 1) });
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    const start = Math.max(1, pageNumber - Math.floor(visiblePages / 2));
    const end = Math.min(pages, start + visiblePages - 1);

    // Add ellipsis for the first page if needed
    if (start > 1) {
      buttons.push(
        <button
          className={styles.sliderContainer__pages__page}
          key="ellipsis-start"
          onClick={() => setSearchParams({ page: String(1) })}
        >
          ...
        </button>,
      );
    }

    // Render page buttons within the visible range
    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          className={
            i === pageNumber
              ? styles.sliderContainer__pages__pageActive
              : styles.sliderContainer__pages__page
          }
          onClick={() => setSearchParams({ page: String(i) })}
        >
          {i}
        </button>,
      );
    }

    // Add ellipsis for the last page if needed
    if (end < pages) {
      buttons.push(
        <button
          className={styles.sliderContainer__pages__page}
          key="ellipsis-end"
          onClick={() => setSearchParams({ page: String(pages) })}
        >
          ...
        </button>,
      );
    }

    return buttons;
  };

  return (
    <div className="container">
      <div className={styles.sliderContainer}>
        <button
          className={styles.sliderContainer__previous}
          onClick={handlePrev}
          disabled={pageNumber === 1}
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

        {renderPageButtons()}

        <button
          className={styles.sliderContainer__next}
          onClick={handleNext}
          disabled={pageNumber === pages}
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

export default PagesSlider;
