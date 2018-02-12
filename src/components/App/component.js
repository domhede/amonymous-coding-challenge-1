import React, { Component } from 'react';
import styled from 'styled-components';
import ImageGrid from '../ImageGrid';
import Search from 'components/Common/Search';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: monospace;
  margin: 0px 16px;
`;

class App extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }
  render() {
    const {filterImages, clearFilter } = this.props;
    return (
      <Wrapper>
        <Search clearFilter={clearFilter} filterImages={filterImages} />
        <ImageGrid />
      </Wrapper>
    );
  }
}

export default App;
