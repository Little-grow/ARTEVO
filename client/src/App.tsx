import './normailzer.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import { useState } from 'react';
import image1 from '../public/images/cart/1.png';
import image2 from '../public/images/cart/2.png';
import image3 from '../public/images/cart/3.png';
import Profile from './pages/Profile/Profile';
import NewProject from './pages/NewProject/NewProject';
import RenderTimeWrapper from './RenderTimeWrapper';

function App({ renderTime }) {
  const initialCart = [
    {
      img: image1,
      name: 'vase collection',
      weightPrice: 5.99,
      weight: 1,
    },
    {
      img: image2,
      name: 'Blanket',
      weightPrice: 12.99,
      weight: 0.5,
    },
    {
      img: image3,
      name: 'Vintage letters',
      weightPrice: 2.99,
      weight: 5,
    },
  ];
  const [cartItems, setCartItems] = useState(initialCart);
  console.log(
    'App rendered in: ',
    renderTime ? renderTime.toFixed(2) : 0,
    'ms',
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RenderTimeWrapper>
              <Home />
            </RenderTimeWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <RenderTimeWrapper>
              <Signup />
            </RenderTimeWrapper>
          }
        />
        <Route
          path="/signin"
          element={
            <RenderTimeWrapper>
              <Signin />
            </RenderTimeWrapper>
          }
        />
        <Route
          path="/store"
          element={
            <RenderTimeWrapper>
              <Store />
            </RenderTimeWrapper>
          }
        />
        <Route
          path="/product"
          element={
            <RenderTimeWrapper>
              <Product />
            </RenderTimeWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <RenderTimeWrapper>
              <Cart data={cartItems} />
            </RenderTimeWrapper>
          }
        />
        <Route
          path="/profile"
          element={
            <RenderTimeWrapper>
              <Profile />
            </RenderTimeWrapper>
          }
        />
        <Route
          path="/new"
          element={
            <RenderTimeWrapper>
              <NewProject />
            </RenderTimeWrapper>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
