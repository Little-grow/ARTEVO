import './normailzer.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
