// blog/client/src/containers/ViewArticle/ViewArticleContainer.js

import React, {Component} from 'react';
import $ from 'jquery';
import {ViewArticle} from '../../components';


class ViewArticleContainer extends Component {
  state = {
    isFetching: true,
    title: undefined,
    content: undefined
  }

deleteArticle = this.deleteArticle.bind(this)
loadArticle = this.loadArticle.bind(this)

componentDidMount = () => this.loadArticle()// react lifecycle component

  loadArticle(){
//    console.log(this.props);
    $.ajax({
      url: `/api/articles/${this.props.params.articleId}`,
      method: 'GET'
    }).done((response) => {
     console.log("CURRENT ARTICLE", response); //log this article in the console
      this.setState({
        title: response.title,
        content: response.content
      });
  });
  }


deleteArticle(){
  $.ajax({
    url: `/api/articles/${this.props.params.articleId}`,
    method: 'DELETE'
  }).done((response) => {
    console.log(response)
  })
}

  render() {
    return (
      <div>
        { this.state.isFetching ?
          <ViewArticle
            handleSubmit={this.handleSubmit}
            deleteArticle={this.deleteArticle}
            title={this.state.title}
            content={this.state.content}
            /> : <h3>Loading...</h3>
        }
      </div>
    )
  }
}

export default ViewArticleContainer;
