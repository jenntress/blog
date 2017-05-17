//  blog/client/src/components/ArticleList/ArticleList.js

import React from 'react';
import {container} from '../../sharedStyles/styles.css'

const ArticlesList = (props) => (
// note that I omitted the return and the curly braces here.
    <div>
      <h1>Some stuff here - from the component!</h1>
      {props.articles.map((item, index) => (
      <div className={container} key={index}>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </div>
    ))};
    </div>
);


export default ArticlesList;
