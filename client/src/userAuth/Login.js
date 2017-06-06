// blog/client/src/userAuth/Login.js

import React from 'react';
import {Link} from 'react-router';

const Login = (props) => (
  <div className="container">
   <h3>Returning User Login</h3>
      <form>
        <label>Email</label>
        <input type='email' className="form-control" placeholder="email address"
          onChange={(event) => props.updateField('email', event.target.value)}/>
        <label>Password</label>
        <input type='password' className="form-control" placeholder="password"
          onChange={(event) => props.updateField('password', event.target.value)}/>
      
        <button type="button" className="btn btn-success"
          onClick={(event) => props.handleSubmit(event)}>Log In</button>
        <Link className="btn btn-default" to={'/signup'}>...or Sign Up</Link>
      </form>
    </div>
  )


export default Login
