// blog/client/src/components/Home/Home.js

import React from 'react'
import {LargeButton} from './styles.css' // styles in the Home folder
import {button, container} from '../../sharedStyles/styles.css' // the original button

const Home = (props) => {
  return (
    <div className={container}>
      <h1> Hello from Home Component!</h1>
       <h3>{props.title}</h3>
       <p>{props.content}</p>
      <button
        onClick={() => alert('coolest btn everrr')}
        className={LargeButton} type='button'>Click me!</button>
      <button className={button} type='button'>Click me!</button>
    </div>
  )
}

export default Home
