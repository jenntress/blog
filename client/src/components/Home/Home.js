// blog/client/src/components/Home/Home.js

import React from 'react'
import {LargeButton} from './styles.css' // styles in the Home folder
import {button, jnav, container} from '../../sharedStyles/styles.css' // the original button

const Home = (props) => {
  return (
    <div className={container}>
      <nav className={jnav}>
         <ul>
           <a href="/">Home</a>
           <a href="/about">About</a>
           <a href="/articlelist">List of Entries</a>
           <a href="/postarticle">Post New Article</a>
         </ul>
      </nav>
      <h1> Hello from Home Component!</h1>
      <button
        onClick={() => alert('coolest btn everrr')}
        className={LargeButton} type='button'>Click me!</button>
      <button className={button} type='button'>Click me!</button>
    </div>
  )
}

export default Home
