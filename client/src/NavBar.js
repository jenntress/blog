// blog/client/src/NavBar.js

import React from 'react';
import { Link } from 'react-router';
import {jnav, navLinkContainer, logo} from './sharedStyles/styles.css'; //


const NavigationBar = () =>
  <nav className={jnav}>
      <div className={logo}>
        <p>&lt;jt&gt;</p>
      </div>

      <div className={navLinkContainer}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/articlelist">articles</Link>
        <Link to="/postarticle">post new</Link>
        <Link to="/signup">sign up</Link>
        <Link to="/login">log in</Link>
      </div>
  </nav>


  export default NavigationBar;
