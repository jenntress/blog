//  blog/client/src/components/CommentList/CommentList.js

import React from 'react';

const CommentsList = (props) => (

  <div>
    { props.comments.length > 0 ? props.comments.map((item, index) => (
        <div key={index}>
          <p>{item.content}</p>
        </div>
      )): <p>No comments yet! Submit one up there ^</p>
    }
  </div>
)

export default CommentsList;
