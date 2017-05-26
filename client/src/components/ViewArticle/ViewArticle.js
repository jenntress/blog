// blog/client/src/components/ViewArticle/ViewArticle.js

import React from 'react';
import { Link } from 'react-router';
import {CommentsList} from '../../components';
import {container, commentscontainer} from '../../sharedStyles/styles.css';

const ViewArticle = (props) => {
console.log(props)
return (
  <div className={container}>
   <h2>{props.title}</h2>
   <p>{props.content}</p>
   <Link className="btn btn-success" to={`/articlelist/edit/${props.id}`}>Edit</Link>
   <button className="btn btn-danger" onClick={props.deleteArticle}>Delete</button>
   <Link className="btn btn-default" to="/articlelist">Back to Articles</Link>

     <div className={commentscontainer}>
       <CommentsList comments={props.comments}/>
     </div>

  </div>
)}


export default ViewArticle;
