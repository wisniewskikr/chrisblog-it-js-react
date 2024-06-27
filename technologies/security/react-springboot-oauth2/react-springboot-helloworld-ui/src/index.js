import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import HelloWorldNotSecured from './components/hello-world-not-secured/HelloWorldNotSecured';
import HelloWorldSecuredUser from './components/hello-world-secured-user/HelloWorldSecuredUser';
import HelloWorldSecuredAdmin from './components/hello-world-secured-admin/HelloWorldSecuredAdmin';
import ErrorMessage from './components/error/ErrorMessage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/not-secured" element={ <HelloWorldNotSecured/> } />
      <Route path="/secured-user" element={ <HelloWorldSecuredUser/> } />
      <Route path="/secured-admin" element={ <HelloWorldSecuredAdmin/> } />
      <Route path="/error" element={ <ErrorMessage/>} />
    </Routes>
  </BrowserRouter>
);