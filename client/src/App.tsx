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

function App() {
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart data={cartItems} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
