//  blog/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
require('bootstrap/dist/css/bootstrap.css'); // need to call here AND in public/index.html

import App from './App';
// multiple imports work below because we're exporting them from index.js in containers folder
import {HomeContainer, AboutContainer, EditArticleContainer, PostArticleContainer, ArticleListContainer} from './containers';


//when we're at our ./ react-router is bringing in this App
// the IndexRoute is bringing in the homepage - so if no route is listed load the homepage
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route path="/articlelist" component={ArticleListContainer} />
      <Route path="/postarticle" component={PostArticleContainer} />
       <Route path="/articlelist/edit/:articleId" component={EditArticleContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
