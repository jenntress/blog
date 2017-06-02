// blog/client/src/userAuth/SignUpContainer.js

import React, {Component} from 'react';
import SignUp from './SignUp';

class SignUpContainer extends Component {


  render () { //pass stuff to your component (if you pass in directly, it would be this.state...)
    return (
      <div>
        <SignUp />
      </div>
    )
  }//this closes the render
}// this ends the SignUpContainer class

export default SignUpContainer
