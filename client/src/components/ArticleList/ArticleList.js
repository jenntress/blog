//  blog/client/src/components/ArticleList/ArticleList.js

import React from 'react';
import {Link} from 'react-router';
import {container} from '../../sharedStyles/styles.css'

const ArticlesList = (props) => (
// note that I omitted the return and the curly braces here.
    <div>
      <h1 className="display-3">All Blog Articles</h1>
      {props.articles.map((item, index) => (
      <div className={container} key={index}>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <br />
        <Link className="btn btn-default" to={`/viewarticle/${item._id}`}>View</Link>
        <Link className="btn btn-success" to={`/articlelist/edit/${item._id}`}>Edit</Link>
        <Link className="btn btn-danger" to={`/articlelist/delete/${item._id}`}>Delete</Link>
      </div>
    ))};
    </div>
);


export default ArticlesList;
