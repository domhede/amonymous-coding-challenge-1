import React from 'react';
import styled from 'styled-components';
import { media } from 'helpers/style-utils';

const Wrapper = styled.div`
  border: 1px solid #dcdcdd;
  padding: 10px 10px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Gif = styled.div`
  width: 100%;
  height:0;
  padding-bottom: 56%;
  position:relative;
`;
const Iframe = styled.iframe`
  position: absolute;
`;

const EmbedGif = ({embed_url}) => {
  return (
    <Wrapper>
      <Gif>
        <Iframe
          src={embed_url}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen>
        </Iframe>
      </Gif>
    </Wrapper>
  );
}

export default EmbedGif;

