// blog/client/src/userAuth/Error.js

import React from 'react';
import {Link} from 'react-router';

const Error = (props) => {
  return(
    <div className="container">
        <h1>YOU FAILED!</h1>
        <h3>{props.error}</h3>
        <Link className="btn btn-default" to={'/'}>Back to home!</Link>
    </div>
  )
}

export default Error
