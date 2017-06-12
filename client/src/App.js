//  blog/src/App.js (this App.js is always being rendered)

import React, { Component } from 'react';
import NavigationBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import $ from 'jquery';


class App extends Component {
  state = {
    user: undefined,
  }

  componentDidMount = () => this.getUser();

  getUser(){
    $.ajax({
      url:`/api/get_user`,
      method: 'GET',
    }).done((response) => {
    console.log("HERE IS THE CURRENT USER", response)
    this.setState({
      user: response
    })
  })
}

  render() {
    return (
      <div>
      <NavigationBar />
        { this.state.user ? React.cloneElement(this.props.children, {user: this.state.user }) : <h1>...Loading</h1>}
      <Footer />
      </div>
    )
  }
}



export default App;
