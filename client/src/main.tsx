import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './normailzer.css';
import RenderTimeWrapper from './RenderTimeWrapper.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RenderTimeWrapper>
      <App />
    </RenderTimeWrapper>
  </React.StrictMode>,
);
