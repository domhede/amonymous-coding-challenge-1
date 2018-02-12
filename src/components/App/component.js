import React, { Component } from 'react';
import styled from 'styled-components';
import ImageGrid from '../ImageGrid';
import Button from 'components/Common/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const MoreButton = styled(Button)`

`;

class App extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }
  render() {
    const { offset, fetchMoreImages } = this.props;

    return (
      <Wrapper>
        <ImageGrid />
        <MoreButton onClick={() => fetchMoreImages(offset + 20)}>Load more</MoreButton>
      </Wrapper>
    );
  }
}

export default App;
