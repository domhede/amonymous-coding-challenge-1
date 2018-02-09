import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }
  render() {
    return (
      <div>
        <div>
          App
        </div>
      </div>
    );
  }
}

export default App;
