// blog/client/src/components/userAuth/SignUp.js

import React from 'react';
import {Link} from 'react-router';

const SignUp = (props) => (
  <div className="form-group">
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Sign Up</h3>
       <input type="email" placeholder="email address"
         onChange={(event) => props.onChange("email", event.target.value)}/>
       <input type="password" placeholder="password"
         onChange={(event) => props.onChange("password", event.target.value)}/>
         <br />
         <button type="submit" className="btn btn-success">Submit</button>
         <Link className="btn btn-default" to="/articlelist">Back to Articles</Link>
   </form>
  </div>
  )


export default SignUp
