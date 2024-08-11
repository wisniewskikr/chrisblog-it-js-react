import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HelloWorld from './HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/helloworld/Hello_World" replace />} />
      <Route path="/helloworld/:message" element={<HelloWorld/>} />
    </Routes>
  </BrowserRouter>
);