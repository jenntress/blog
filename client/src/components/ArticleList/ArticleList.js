//  blog/client/src/components/ArticleList/ArticleList.js

import React from 'react';
import {Link} from 'react-router';
import {eacharticlecontainer, mainheader, container} from '../../sharedStyles/styles.css'

const ArticlesList = (props) => (
// note that I omitted the return and the curly braces here.
    <div className={container}>
      <h1 className={mainheader}>All Blog Articles</h1>
      {props.articles.map((item, index) => (
      <div className={eacharticlecontainer} key={index}>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <br />
        <Link className="btn btn-default" to={`/viewarticle/${item._id}`}>View</Link>

      </div>
    ))};
    </div>
);


export default ArticlesList;
