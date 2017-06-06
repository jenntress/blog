// blog/client/src/userAuth/ShowUserContainer.js

import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import ShowUser from './ShowUser';

class ShowUserContainer extends Component{
  state = {
    valid: false,
    email: undefined,
    loaded: false
  }
  componentDidMount = () => this.getUser();
  getUser(){
     $.ajax({
       url: `/api/get_user`,
      method: 'GET'
     }).done((response) => {
      if(response._id !== this.props.params.user_id){ //"does not equal"
      //notice there is NO "else" here - we omit to speed up the code
      //if it's not equal, redirect use browserHistory.push, and skip the rest of the code below
         browserHistory.push(`/error/${'INVALID ACCESS!'}`)
       }
       this.setState({ //this is a method
         valid: true,
         email: response.local.email,
         loaded: true
       });
        console.log("USER MATCHES! ",response._id);
     })
   }//this ends the getUser function

   logout = this.logout.bind(this);
   logout(event){//event is a parameter
     event.preventDefault();
      $.ajax({
        url: 'api/logout',
        method: 'GET'
      }).done((response) => response.loggedOut ?
          browserHistory.push('/login') :
          browserHistory.push(`/error/${'Error during logout!'}`)
        );
   }
   render(){
     return(
       <div>
        {(this.state.valid && this.state.loaded) ?
            <ShowUser
              email={this.state.email}
              logout={this.logout}
             /> : "loading..."}
       </div>
     )
   }
}//this ends the class ShowUserContainer

export default ShowUserContainer
