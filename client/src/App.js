//  blog/src/App.js (this App.js is always being rendered)

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
