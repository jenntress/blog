// blog/client/containers/ArticleList/ArticleListContainer.js

import React, {Component} from 'react';
import $ from 'jquery';
import {ArticleList} from '../../components';


class ArticleListContainer extends Component {
  state = {
    articles: undefined
  }

componentDidMount = () => this.loadArticles()// react lifecycle component

  loadArticles(){
    $.ajax({
      url: '/api/articles',
      method: 'GET'
    }).done((response) => {
    console.log(response); //log the third object in my database
      this.setState({articles: response.data});
   });
  }

  render() {
    return (
      <div>
       {this.state.articles ?  <ArticleList articles={this.state.articles}  /> : undefined}
      </div>
    )
  }
}

export default ArticleListContainer;
