import React from 'react';

import './LoginReadme.css';

const text = [
  'Until the user provides a non-empty User Name and Password, the Login button is disabled.',
  'When the Login button is clicked, a <pre> element containing the submitted User Name and Password is rendered.',
  'Whenever the user modifies the User Name or the Password, the <pre> element is removed from the page.'
].join('\n');

const LoginReadme = () => <div className="LoginReadme">{text}</div>;

export default LoginReadme;
