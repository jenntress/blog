// blog/client/src/containers/Comment/CommentContainer.js

import React from 'react';
import { Link } from 'react-router';


const CommentContainer = (props) => (
  <div>
   <h3>Add a comment to {props.title}</h3>
   <form className="edit-form" onSubmit={(event) => props.handleSubmit(event)}>
      <div className="form-group">
        <label>New Comment</label>
        <input type="text" className="form-control" value={props.comment} placeholder="Comment"
          onChange={(event) => props.updateField('comment', event.target.value)}
        />
      </div>



)
        export default CommentContainer;
