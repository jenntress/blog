//  blog/client/src/components/PostArticle/PostArticle.js

import React from 'react';
import {container} from '../../sharedStyles/styles.css'

const PostArticle = (props) => (
  <div className={container}>
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Add a New Article</h3>

      <label>Article Title</label>
       <input type="text" className="form-control" placeholder="title of article"
         onChange={(event) => props.onChange("title", event.target.value)}/>

      <label>Article Content</label>
       <textarea className="form-control" placeholder="article content"
         onChange={(event) => props.onChange("content", event.target.value)}/>
         <br />
    <button disabled={!props.valid} type="submit" className="btn btn-success">Post</button>
   </form>
  </div>
)


export default PostArticle;
