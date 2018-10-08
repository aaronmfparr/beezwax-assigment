import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => (
  <div>
    <h2>Reset Password</h2>
    <ul>
      <li>
        Remembered your password?{' '}
        <Link to="/login" id="login">
          Login
        </Link>
      </li>
      <li>
        <Link to="/" id="home">
          Home
        </Link>
      </li>
    </ul>
  </div>
);

export default ForgotPassword;
