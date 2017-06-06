// blog/client/src/components/Home/Home.js

import React from 'react'
import {container, homeimg} from '../../sharedStyles/styles.css' // the original button

const Home = (props) => {
  return (
    <div className={container}>
    <img className={homeimg} src="%PUBLIC_URL%/../../../jenn.png" alt="" />
      <h1> Hello from Home Component!</h1>
       <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula et nisi maximus rhoncus. Quisque risus purus, vulputate vel condimentum sit amet, pellentesque in felis. Nam non pharetra nibh. Aliquam vel metus non erat egestas euismod. Sed quis malesuada dui. Nunc tincidunt tortor risus, a dignissim velit mattis ut. Sed interdum in felis vel eleifend. Donec molestie commodo eros, sit amet tincidunt felis pretium fermentum. Quisque id massa eget est iaculis placerat. Suspendisse turpis elit, tempus in vestibulum nec, imperdiet in ligula. Nunc aliquam urna ut porta convallis. Sed eget eleifend massa. Donec leo magna, aliquet in ullamcorper eget, laoreet vitae odio. Maecenas lectus dui, feugiat et nisi nec, pulvinar fringilla velit.
       </p>
       <p>Sed nec magna quis neque rhoncus ultrices. Curabitur fermentum urna in augue volutpat pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nec tincidunt elit. Etiam fringilla eleifend enim sit amet pharetra. Etiam ante purus, fringilla eu arcu ut, tincidunt dapibus sem. Duis in fermentum sem. Integer ut urna a nibh commodo malesuada id sit amet nisi. Sed ac viverra nisl. Pellentesque placerat convallis rhoncus.</p>

    </div>
  )
}

export default Home
