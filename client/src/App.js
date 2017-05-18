//  blog/src/App.js (this App.js is always being rendered)

import React, { Component } from 'react';
import NavigationBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
      <NavigationBar />
        {this.props.children}
      </div>
    )
  }
}

export default App;
