import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

const Content = () => (
  <div className="App-content">
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/password" component={ForgotPassword} />
  </div>
);

export default Content;
