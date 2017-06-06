// blog/client/src/containers/EditArticle/EditArticleContainer.js

import React, { Component } from 'react';
import $ from 'jquery';
import {EditArticle} from '../../components';


class EditArticleContainer extends Component {
  state = {
    isFetching: false,
    title: undefined,
    content: undefined
  }

  updateField = this.updateField.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  componentDidMount = () => this.loadArticles()

  updateField(fieldName, fieldValue) { //update each field at the same time with one function
    const newState ={};
      newState[fieldName] = fieldValue;
      this.setState(newState);
  }

  loadArticles() {
    $.ajax({ //route is from our backend! Note that we use articlelist in our client and articles in our node.
      url:`/api/articles/${this.props.params.articleId}`,
      method: 'GET'
    }).done(response => {
     // console.log("THIS CURRENT ARTICLE", response);
      this.setState({
        title: response.data.title,
        content: response.data.content,
        isFetching: true
      });
    })
  }

  handleSubmit(event){
      event.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content
    }
    //  console.log("HERE IS THE DATA TO EDIT", data)

    //****This is the PUT ajax******
    $.ajax({
      url: `/api/articles/${this.props.params.articleId}`,
      method: 'PUT',
      data: data
    }).done(response => {
       console.log("HERE US THE DATA THAT GOT UPDATED", response);
      })
  }


    render() {
      return (
        <div>
          { this.state.isFetching ?
            <EditArticle
              handleSubmit={this.handleSubmit}
              updateField={this.updateField}
              title={this.state.title}
              content={this.state.content}
              /> : <h3>Loading...</h3>
          }
        </div>
      )
    }
  }

  export default EditArticleContainer;
