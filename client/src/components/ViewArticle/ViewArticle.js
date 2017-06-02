// blog/client/src/components/ViewArticle/ViewArticle.js

import React from 'react';
import { Link } from 'react-router';
import {CommentsList} from '../../components';
import {container, commentscontainer} from '../../sharedStyles/styles.css';

const ViewArticle = (props) => (
  <div className={container}>
   <h2>{props.title}</h2>
   <p>{props.content}</p>
   <Link className="btn btn-success" to={`/articlelist/edit/${props.id}`}>Edit</Link>
   <button className="btn btn-danger" onClick={props.deleteArticle}>Delete</button>
   <Link className="btn btn-default" to="/articlelist">Back to Articles</Link>

     <div className={commentscontainer}>
        <h3>All {props.title} Comments</h3>
        <form>
           <input type="text" className="form-control" placeholder="add your comment"  onChange={ (event) => props.updateText(event) }/>
           <button type="submit" className="btn btn-success" onClick={(event) => props.submitComment(event, props.id)}>Submit</button>

        </form>
        <CommentsList comments={props.comments}/>
      </div>

  </div>
)


export default ViewArticle;
