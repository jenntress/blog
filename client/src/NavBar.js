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
        <Link to="/postarticle">Add New</Link>
      </ul>
  </nav>


  export default NavigationBar;
