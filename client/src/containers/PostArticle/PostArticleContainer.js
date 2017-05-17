// blog/client/containers/PostArticle/PostArticleContainer.js

import React, {Component} from 'react';
import {PostArticle} from '../../components'; //this is the presentational file
import $ from 'jquery';
import { browserHistory } from 'react-router';

class PostArticleContainer extends Component {  //set the state
  state={
    title: undefined,
    content: undefined
  }

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit(event){
        event.preventDefault()
        alert('Article Posted!') // give 'some' user feedback - but autodirect to article would be better

    const blurb={ //used blurb - not sure if "entry" is a reserved keyword
      title: this.state.title,
      content: this.state.content
    }
console.log(blurb);
    $.ajax({
      url:'/api/articles',
      method: 'POST',
      data: blurb
    }).done((response) => {
      console.log(response)
      browserHistory.push('/articles')
    })
 }

 updateTitle=(event) => this.setState({title: event.target.value})
 updateContent=(event) => this.setState({content: event.target.value})

  render (){
    return (
      <div>
        <PostArticle
           handleSubmit={this.handleSubmit}
           updateTitle={this.updateTitle}
           updateContent={this.updateContent}
        />
      </div>
    )
  }

}

export default PostArticleContainer;
