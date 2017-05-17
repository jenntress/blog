// blog/client/containers/ArticleList/ArticleListContainer.js

import React, {Component} from 'react';
import $ from 'jquery';
import {ArticleList} from '../../components';


class ArticleListContainer extends Component {
  state = {
    articles: undefined
  }

// react lifecycle component
componentDidMount = () => this.loadArticles()

  loadArticles(){
    $.ajax({
      url: '/api/articles',
      method: 'GET'
    }).done((response) => {
      this.setState({articles: response})
    console.log(response);
    })
  }



  render() {
    return (
      <div>
       {this.state.articles ? <ArticleList articles={this.state.articles} /> : undefined}
      </div>
    )
  }
}

export default ArticleListContainer;
