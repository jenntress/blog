// blog/client/src/components/userAuth/SignUp.js

import React from 'react';
import {Link} from 'react-router';

const SignUp = (props) => (
  <div className="container">
    <h3>New User Sign Up</h3>
      <form>
        <label>Email</label>
        <input type='email' className="form-control" placeholder="email address"
         onChange={(event) => props.updateField('email', event.target.value)}/>

        <label>Password</label>
        <input type='password' className="form-control" placeholder="password"
         onChange={(event) => props.updateField('password', event.target.value)}/>

        <button type="button" className="btn btn-success"
          onClick={(event) => props.handleSubmit(event)}>Sign Up</button>
        <Link className="btn btn-default" to={'/login'}>Returning User &gt; Login</Link>
       </form>
    </div>
)


export default SignUp
