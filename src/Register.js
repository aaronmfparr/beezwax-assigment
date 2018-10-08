import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => (
  <div>
    <h2>Register</h2>
    <ul>
      <li>
        Already have an account?{' '}
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

export default Register;
