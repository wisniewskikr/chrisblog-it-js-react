import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelloWorld from './HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/helloworld" element={<HelloWorld/>} />
    </Routes>
  </BrowserRouter>
);