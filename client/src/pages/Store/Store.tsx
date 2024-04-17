import Navbar from '../../components/Navbar/Navbar';
import PagesSlider from '../../components/PagesSlider/PagesSlider';
import Products from '../../components/Products/Products';
import styles from './Store.module.css';

import image1 from '../../../public/images/store/1.png';
import image2 from '../../../public/images/store/2.png';
import image3 from '../../../public/images/store/3.png';
import image4 from '../../../public/images/store/4.png';
import image5 from '../../../public/images/store/5.png';
import image6 from '../../../public/images/store/6.png';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Store = () => {
  const data = [
    {
      img: image1,
      name: 'scented Candle',
      author: 'Mariam Said',
      reviews: '4.1k',
      price: '650',
      stars: '5',
    },
    {
      img: image2,
      name: 'wall paintings',
      author: 'Tariq Ahmed',
      reviews: '4.1k',
      price: '650',
      stars: '5',
    },
    {
      img: image3,
      name: 'Blanket',
      author: 'Fatima Abbas',
      reviews: '4.1k',
      price: '650',
      stars: '5',
    },
    {
      img: image4,
      name: 'Clay Pot',
      author: 'Nadia Salem',
      reviews: '4.1k',
      price: '650',
      stars: '5',
    },
    {
      img: image5,
      name: 'Clay Pot',
      author: 'Mariam Said',
      reviews: '4.1k',
      price: '650',
      stars: '5',
    },
    {
      img: image6,
      name: 'Bracelet',
      author: 'Tariq Ahmed',
      reviews: '4.1k',
      price: '650',
      stars: '5',
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const pageMaximumContent = 3;
  const dataLenght = data.length;
  const pages = Math.ceil(dataLenght / pageMaximumContent);
  const pageNumber =
    Number(searchParams.get('page')) <= pages
      ? Number(searchParams.get('page'))
      : 1; // Default to page 1 if no page param

  useEffect(() => {
    setSearchParams({ page: String(pageNumber) });
  }, [pageNumber, setSearchParams]);

  return (
    <>
      <Navbar logoOnly={false} />
      <main>
        <Products
          data={data}
          pageNumber={pageNumber}
          pageMaximumContent={pageMaximumContent}
        />
        <PagesSlider
          pageNumber={pageNumber}
          setSearchParams={setSearchParams}
          pages={pages}
        />
      </main>
    </>
  );
};

export default Store;
