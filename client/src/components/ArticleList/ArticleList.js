//  blog/client/src/components/ArticleList/ArticleList.js

import React from 'react'

const ArticlesList = (props) => (
// note that I'm omitting the return and curly braces here.
    <div id="items-box">
      <h2>Hello, from the ArticleList component</h2>
      {props.articles.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
);

export default ArticlesList;
