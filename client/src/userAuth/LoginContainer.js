// blog/client/src/userAuth/LoginContainer.js

import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import Login from './Login';

class LoginContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }

  updateField = this.updateField.bind(this);
  updateField(field, value){
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }
  handleSubmit = this.handleSubmit.bind(this);
  handleSubmit(event){
    event.preventDefault();
      console.log('STATE IS NOW: ', this.state);
      const local = {
        email: this.state.email,
        password: this.state.password
      }

    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: local // we need "data" because this is a POST method
    }).done((response) => (
        console.log("SUCCESS AT LOGIN")) ||
        (response._id) ?
        browserHistory.push('/show') :
        browserHistory.push(`/error${response.message}`));
  }

  render(){
    return(
      <div>
          <Login updateField={this.updateField} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default LoginContainer
