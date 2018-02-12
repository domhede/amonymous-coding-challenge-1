import React from 'react';
import styled from 'styled-components';
import { media } from 'helpers/style-utils';
import Button from 'components/Common/Button';

import EmbedGif from './EmbedGif';

const Wrapper = styled.div`
  width: 100%;
`;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: 32px 0px;
  ${media.mobile`
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  `}
  ${media.tablet`
    grid-template-columns: auto auto auto;
  `}
  ${media.desktop`
    grid-template-columns: auto auto auto auto;
  `}
`;
const EmptyMessage = styled.div`
  padding: 64px;
  text-align: center;
`;

const renderImages = images => {
  return images.map(image => {
    return <EmbedGif key={image.id} embed_url={image.embed_url} />
  })
}

const ImageGrid = ({images, fetchMoreImages, offset}) => {
  if(images.length <= 0) {
    return <EmptyMessage>No results..</EmptyMessage>
  }
  return (
    <Wrapper>
      <Grid>
        {renderImages(images)}
      </Grid>
      <Button withShadow onClick={() => fetchMoreImages(offset + 20)}>Load more</Button>
    </Wrapper>
  );
}

export default ImageGrid;
