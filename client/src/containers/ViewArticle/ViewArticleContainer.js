// blog/client/src/containers/ViewArticle/ViewArticleContainer.js

import React, {Component} from 'react';
import $ from 'jquery';
import {ViewArticle} from '../../components';
import { browserHistory } from 'react-router';


class ViewArticleContainer extends Component {
  state = {
     //here we could do article: undefined and omit all these properties if we want
     //(but then in the component you need to add "article" to all components like props.article.title)
    isFetching: false,
    id: undefined,
    title: undefined,
    content: undefined,
    comments: undefined,
    comment: undefined
  }

//show instantly when we type in the field in the browser
deleteArticle = this.deleteArticle.bind(this)
loadArticle = this.loadArticle.bind(this)
submitComment = this.submitComment.bind(this)

componentDidMount = () => this.loadArticle()// react lifecycle component

  loadArticle(){
      //   console.log(this.props);
    $.ajax({
      url: `/api/articles/${this.props.params.articleId}`,
      method: 'GET'
    }).done((response) => {
      //  console.log("CURRENT ARTICLE", response); //log this "response" (from the .done) article in the console
      this.setState({ //THIS IS A FUNCTION!!!
        id: response.data._id, //_id (underscore) is for mongoose
        title: response.data.title,
        content: response.data.content,
        comments: response.data.comments,
        isFetching: true
      });
       console.log("THESE ARE MY COMMENTS", this.state.comments)
    });
  }

//********COMMENTS SECTION**********
updateText = (event) => this.setState({comment: event.target.value})
  submitComment(event, _id){
    event.preventDefault();
    console.log("THE COMMENT!", this.state.comment);
    if(!this.state.comment || this.state.comment.length < 1){//prevents server crash from blank comments
      alert("type in the box first")
      return
    }
    let newComment = {content: this.state.comment}//just a temp variable to pass below
    $.ajax({
      url: `/api/articles/comment/${_id}`, //you will get a 404 if you have the wrong end point - remember the first slash!
      method: 'POST',
      data: newComment
    }).done((response) => {
      console.log("HERE IS THE NEW COMMENT", response);
      this.setState({comment: ""})
      this.loadArticle()
    })
  }



deleteArticle(){
  $.ajax({
    url: `/api/articles/${this.props.params.articleId}`,
    method: 'DELETE'
  }).done((response) => {
    console.log(response)
    browserHistory.push('/articlelist')
  })
}

  render() {
    return (
      <div>
        { this.state.isFetching ?
          <ViewArticle
            deleteArticle={this.deleteArticle}
            updateText={this.updateText}
            submitComment={this.submitComment}
            id={this.state.id}
            title={this.state.title}
            content={this.state.content}
            comments={this.state.comments}
            /> : <h3>Loading...</h3>
        }
      </div>
    )
  }
}

export default ViewArticleContainer;
