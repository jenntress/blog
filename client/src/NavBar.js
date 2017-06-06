// blog/client/src/NavBar.js

import React from 'react';
import { Link } from 'react-router';
import {jnav} from './sharedStyles/styles.css'; //


const NavigationBar = () =>
  <nav className={jnav}>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articlelist">Articles</Link>
        <Link to="/postarticle">Post New</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </ul>
  </nav>


  export default NavigationBar;
