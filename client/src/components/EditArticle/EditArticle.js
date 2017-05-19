// blog/client/src/components/EditArticle/EditArticle.js

import React from 'react';
import { Link } from 'react-router';

const EditArticle = (props) => (

  <div className="container">
   <h3>Make changes to {props.title}</h3>
   <form className="edit-form" onSubmit={(event) => props.handleSubmit(event)}>
      <div className="form-group">
        <label>Article Title</label>
        <input type="text" className="form-control" value={props.title} placeholder="Title"
          onChange={(event) => props.updateField('title', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <input type="text" className="form-control" value={props.content} placeholder="Content"
          onChange={(event) => props.updateField('content', event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success">Save</button>
      <Link className="btn btn-default" to="/articlelist">Back to Articles</Link>
    </form>
  </div>
)

  export default EditArticle;
