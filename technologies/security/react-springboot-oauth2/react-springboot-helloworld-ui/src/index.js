import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import User from './components/user/User';
import Admin from './components/admin/Admin';
import ErrorMessage from './components/error/ErrorMessage';
import AuthProvider from 'react-auth-kit/AuthProvider';
import createStore from 'react-auth-kit/createStore';
import Login from './components/login/Login';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Logout from './components/logout/Logout';
import Public from './components/public/Public';

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
        <Route path="/public" element={ <Public/> } />        
        <Route path="/error" element={ <ErrorMessage/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/logout" element={ <Logout/>} />
        <Route element={<AuthOutlet fallbackPath='/login' />}>
          <Route path="/user" element={ <User/> } />
          <Route path="/admin" element={ <Admin/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);