// blog/client/containers/ArticleList/ArticleListContainer.js

import React, {Component} from 'react';
import $ from 'jquery';
import ArticlesList from '../../components';

class ArticlesListContainer extends Component {
  state = {
    articles: undefined
  }

    componentDidMount = () => this.loadArticles()

    loadArticles(){
      $.ajax({
        url:'api/articles',
        method: 'GET'
      }).done((response) => {
        this.setState({articles: response})
  console.log(response);
      })
    }

  render (){
    return (
       <div>
         {this.state.articles ? <ArticlesList articles={this.state.articles} /> : undefined}
       </div>
     );
   }
}
export default ArticlesListContainer;
