import React from 'react'
import {LargeButton} from './styles.css'
import {button} from '../../sharedStyles/styles.css' // the original button

const Home = (props) => {
  return (
    <div>
      <h1> Hell from Home Component!</h1>
      <button
        onClick={() => alert('coolest btn everrr')}
        className={LargeButton} type='button'>Click me!</button>
      <button className={button} type='button'>Click me!</button>
    </div>
  )
}

export default Home
