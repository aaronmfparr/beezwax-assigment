import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Content from './Content';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          <Link to="/">React</Link>
        </h1>
      </header>
      <Content />
    </div>
  </Router>
);

export default App;
