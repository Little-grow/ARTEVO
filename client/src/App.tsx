import './normailzer.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
