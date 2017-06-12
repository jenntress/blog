//  blog/client/src/components/ArticleList/ArticleList.js

import React from 'react';
import {Link} from 'react-router';
import {mainheader, container} from '../../sharedStyles/styles.css'
import {eacharticlecontainer} from './styles.css'; // the local one in this folder

const ArticlesList = (props) => (
// note that I omitted the return and the curly braces here.
    <div className={container}>
      <h1 className={mainheader}>All Blog Articles</h1>
      {props.articles.map((item, index) => (
      <div className={eacharticlecontainer} key={index}>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <img alt="" src={ item.img }/>
        <br />
        <Link className="btn btn-default" to={`/viewarticle/${item._id}`}>View</Link>
      </div>
    ))};
    </div>
);


export default ArticlesList;
