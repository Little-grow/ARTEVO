import { Link } from 'react-router-dom';
import styles from './FormHeader.module.css';

const FormHeader = (props) => {
  const { header, description, anotherPage } = props;
  return (
    <>
      <h2>{header}</h2>
      <p>
        {description}{' '}
        {anotherPage && (
          <Link to={`/${anotherPage.nav}`} className={styles.link}>
            {anotherPage.text}
          </Link>
        )}
      </p>
    </>
  );
};

export default FormHeader;
