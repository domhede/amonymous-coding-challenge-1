import React from 'react';
import styled from 'styled-components';
import { media } from 'helpers/style-utils';

import EmbedGif from './EmbedGif';

const Grid = styled.div`
 display: grid;
 grid-template-columns: auto auto;
 grid-column-gap: 30px;
 grid-row-gap: 30px;
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

const renderImages = images => {
  return images.map(image => {
    return <EmbedGif key={image.id} embed_url={image.embed_url} />
  })
}

const ImageGrid = ({images}) => {
  if(!images) {
    return null;
  }
  return (
    <Grid>
      {renderImages(images)}
    </Grid>
  );
}

export default ImageGrid;
