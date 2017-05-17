//  blog/client/src/components/PostArticle/PostArticle.js

import React from 'react';

const PostArticle = (props) => (
  <div className="form-group">
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Add a New Article</h3>
       <input type="text" placeholder="title of article"
         onChange={(event) => props.updateTitle(event)}/>
       <input type="text" placeholder="article content"
         onChange={(event) => props.updateContent(event)}/>
    <button type="submit" className="btn btn-default">Post</button>
   </form>
  </div>
)


export default PostArticle;
