// blog/client/src/components/Home/Home.js

import React from 'react';
import {} from '../../sharedStyles/styles.css'; // shared styles in src
import {homeContainer, jumberTroner,
        homeimg, helloText, welcomeTextContainer,
        myNameIs, myName, imma, iDo, welcomeImgContainer,
        myNameLine, latestWorkContainer, latestWorkText,
        grayLine, latestWorkJumbo, card, cardThumbnail,
        cardsContainer, cardTitle, cardDescription
       } from './styles.css'; // the local one in this folder

const Home = (props) => (
    <div className={homeContainer}>

      <div className={jumberTroner}>
        <div className={welcomeTextContainer}>
          <p className={helloText}>Hello.</p>
          <p className={myNameIs}>my name is</p>
          <div className={myNameLine}>
            <p>
              <span className={myName}>Jenn Turner</span>
              <span className={imma}>and I&#39;m a</span>
              </p>
          </div>
          <p className={iDo}>fullstack web developer</p>
        </div>
        <div className={welcomeImgContainer}>
          <img className={homeimg} src="%PUBLIC_URL%/../../../jenn.png" alt="" />
        </div>
      </div>

      <div className={latestWorkContainer}>
        <div className={latestWorkJumbo}>
          <hr className={grayLine}/>
          <div className={latestWorkText}><p>SOME OF MY LATEST WORK</p></div>
          <hr className={grayLine}/>
        </div>

        <div className={cardsContainer}>

              <div className={card}>
                  <div className={cardThumbnail}>
                    <p className={cardTitle}>item.title</p>
                  </div>
                  <p className={cardDescription}>item.content</p>
              </div>

        </div>

      </div>

    </div>
  )

export default Home
