// blog/client/src/userAuth/ShowLoginContainer.js

import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import ShowLogin from './ShowLogin';

class ShowLoginContainer extends Component {
  state = {
    valid: false,
    user_id: undefined
  }
  componentDidMount = () => this.getUser();
  getUser(){
    $.ajax({
      url: './api/get_user',
      method: 'GET' //no data: data because this is a GET call
    }).done((response) => {
      (response._id && response._id.length) ? //if this is true... do below
         this.setState({valid: true, user_id: response._id}) : //if we are in the system hurray!
         browserHistory.push(`/error/${'LOGIN UNSUCCESSFUL'}`)
    })
  }

  render(){
    return (
      <div className="container">
      {(this.state.valid) ? <ShowLogin user_id={this.state.user_id}/> : "loading..."}
      </div>
    )
  }
}// this ends the class

export default ShowLoginContainer
