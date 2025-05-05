import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
