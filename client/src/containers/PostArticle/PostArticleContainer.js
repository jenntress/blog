// blog/client/src/containers/PostArticle/PostArticleContainer.js

import React, {Component} from 'react';
import {PostArticle} from '../../components'; //this is the presentational file
import $ from 'jquery';
import { browserHistory } from 'react-router';

class PostArticleContainer extends Component {  //set the state
  state={
    title: undefined,
    content: undefined,
    valid: false
  }

    updateField(name, value){
      const newState={};
      newState[name]=value;
      this.setState(newState);
    }
    // updateTitle=(event) => this.setState({title: event.target.value})
    // updateContent=(event) => this.setState({content: event.target.value})
    onChange = this.onChange.bind(this);
    onChange(name, value){
      this.updateField(name, value);
      this.validate();
    }
    validate(){
      this.setState({
        valid: (this.state.title !== undefined) && (this.state.content !== undefined)
      })
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


  render (){
    return (
      <div>
        <PostArticle
           handleSubmit={this.handleSubmit}
           onChange={this.onChange}
           valid={this.state.valid}
        />
      </div>
    )
  }

}

export default PostArticleContainer;
