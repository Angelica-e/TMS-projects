import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router';
import { useDispatch } from 'react-redux';
import {SignUp} from "./services/singnUp";
import {SignIn} from "./services/signIn";
import {Admin} from './services/admin';


function App() {
  const dispatch = useDispatch();


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/admin" component={Admin} exact />
      </div>
    </div>
  );
}

export default App;





