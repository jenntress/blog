//  blog/src/App.js (this App.js is always being rendered)

import React, { Component } from 'react';
import {container} from './App.css'

class App extends Component {
  render() {
    return (
      <div className={container}>
        {this.props.children}
      </div>
    );
  }
}

export default App;