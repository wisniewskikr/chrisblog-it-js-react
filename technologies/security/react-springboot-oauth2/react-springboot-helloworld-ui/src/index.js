import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import HelloWorldNotSecured from './components/hello-world-not-secured/HelloWorldNotSecured';
import HelloWorldSecuredUser from './components/hello-world-secured-user/HelloWorldSecuredUser';
import HelloWorldSecuredAdmin from './components/hello-world-secured-admin/HelloWorldSecuredAdmin';
import ErrorMessage from './components/error/ErrorMessage';
import AuthProvider from 'react-auth-kit/AuthProvider';
import createStore from 'react-auth-kit/createStore';
import Login from './components/login/Login';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Logout from './components/logout/Logout';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'http:',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/not-secured" element={ <HelloWorldNotSecured/> } />        
        <Route path="/error" element={ <ErrorMessage/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/logout" element={ <Logout/>} />
        <Route element={<AuthOutlet fallbackPath='/login' />}>
          <Route path="/secured-user" element={ <HelloWorldSecuredUser/> } />
          <Route path="/secured-admin" element={ <HelloWorldSecuredAdmin/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);