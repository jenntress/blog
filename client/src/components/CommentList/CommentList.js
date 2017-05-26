//  blog/client/src/components/CommentList/CommentList.js

import React from 'react';

const CommentsList = (props) => (

  <div>
  <h3>Comments</h3>
    { props.comments.length > 0 ? props.comments.map((item, index) => (
        <div key={index}>
          <p>{item.content}</p>
        </div>
      )): <p>Be the first to leave a comment!</p>
    }
  </div>
)

export default CommentsList
