// blog/client/src/components/ViewArticle/ViewArticle.js

import React from 'react';
import { Link } from 'react-router';

const ViewArticle = (props) => (

  <div className="container">
   <h3>{props.title}</h3>
   <p>{props.content}</p>
   <Link className="btn btn-success" to={`/articlelist/edit/${props._id}`}>Edit</Link>
   <Link className="btn btn-danger" to={`/articlelist/delete/${props._id}`}>Delete</Link>
   <Link className="btn btn-default" to="/articlelist">Back to Articles</Link>
  </div>
)


export default ViewArticle;
