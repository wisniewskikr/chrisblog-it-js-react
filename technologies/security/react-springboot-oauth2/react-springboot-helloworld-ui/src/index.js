import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import HelloWorldNotSecured from './components/hello-world-not-secured/HelloWorldNotSecured';
import HelloWorldSecured from './components/hello-world-secured/HelloWorldSecured';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/not-secured" element={ <HelloWorldNotSecured/> } />
      <Route path="/secured" element={ <HelloWorldSecured/> } />
    </Routes>
  </BrowserRouter>
);