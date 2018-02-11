import React, { Component } from 'react';
import styled from 'styled-components';
import ImageGrid from '../ImageGrid';

class App extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }
  render() {
    return (
      <div>
        <ImageGrid />
      </div>
    );
  }
}

export default App;
