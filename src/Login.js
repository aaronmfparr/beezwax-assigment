import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import LoginReadme from './LoginReadme'
import './Login.css';

class Login extends PureComponent {
  state = {
    username: '',
    password: '',
    submitted: false
  };

  handleChange = control => event => {
    this.setState({
      [control]: event.target.value,
      submitted: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      submitted: true
    });
  };

  render() {
    const { username, password, submitted } = this.state;

    return (
      <div className="Login">
        <h2>Login</h2>

        <form className="Login-form" noValidate>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="User Name"
            onChange={this.handleChange('username')}
            value={username}
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange('password')}
            value={password}
            required
          />

          <button
            type="submit"
            name="submit"
            id="submit"
            disabled={!username || !password}
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>

        {submitted && (
          <pre>
            {[`Username: ${username}`, `Password: ${password}`].join('\n')}
          </pre>
        )}

        <ul>
          <li>
            Forgot password?{' '}
            <Link to="/password" id="reset">
              Reset
            </Link>
          </li>
          <li>
            Don't have an account?{' '}
            <Link to="/register" id="register">
              Register
            </Link>
          </li>
          <li>
            <Link to="/" id="home">
              Home
            </Link>
          </li>
        </ul>

        <LoginReadme />
      </div>
    );
  }
}

export default Login;
