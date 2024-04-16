import { useState } from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  const [showToggle, setShowToggle] = useState(false);

  const { inputLabel, inputType, toggle, constraints, anotherPage } = props;

  function handleKeyDown(event) {
    console.log(event.key);
    if (event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      setShowToggle((prevState) => !prevState);
    }
    event.target.focus();
  }

  return (
    <div className={styles.inputDiv}>
      {toggle ? (
        <>
          <input
            type="checkbox"
            id={toggle.toggleCheck}
            className={styles.toggleCheck}
            onChange={(e) => setShowToggle(e.target.checked)}
            checked={showToggle}
          />

          <div className={styles.toggleLine}>
            <label htmlFor="">{inputLabel}</label>
            <div className={styles.showToggle}>
              <label
                htmlFor={toggle.toggleCheck}
                tabIndex={0}
                role="checkbox"
                aria-checked={showToggle ? 'false' : 'true'}
                onKeyDown={handleKeyDown}
              >
                {toggle.toggleIcon1}
                <p>{toggle.toggleText1}</p>
              </label>
              <label
                htmlFor={toggle.toggleCheck}
                tabIndex={0}
                role="checkbox"
                aria-checked={showToggle ? 'true' : 'false'}
                onKeyDown={handleKeyDown}
              >
                {toggle.toggleIcon2}
                <p>{toggle.toggleText2}</p>
              </label>
            </div>
          </div>
        </>
      ) : (
        <label htmlFor={styles.input}>{inputLabel}</label>
      )}

      <input
        type={
          toggle
            ? showToggle
              ? toggle.toggleInput2
              : toggle.toggleInput1
            : inputType
        }
        id={styles.input}
      />

      {constraints ? (
        <div className={styles.constraints}>
          {constraints.map((constraint) => (
            <div className={styles.constrain}>
              <div className="circle"></div>
              <p>{constraint}</p>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}

      {anotherPage ? (
        <div className={styles.another}>
          <a href={anotherPage.link}>{anotherPage.text}</a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
