import React from 'react';
import styled from 'styled-components';
import EmbedGif from '../EmbedGif';

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 0;
  transition-duration: .2s, .2s;
  transition-timing-function:
`;
const Wrapper = styled.div`
  border-bottom: 2px solid #dcdcdd;
  margin-bottom: 30px;
  position: relative;
  &:hover {
    .propertyButton {
      display: inline;
    }
    .imageOverlay {
      background: rgba(0, 0, 0, 0.3);
    }
  }

`;
const ImageWrapper = styled.div`
  position: relative;
  line-height: 0;
`;
const Header = styled.div`
  background-color: ${props => props.bgColor};
  height: 30px;
  padding: 8px 7px;
`;
const Image = styled.div`
  background: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: -15px;
  margin-left: -15px;
  padding-bottom: 75%;
  background-position: 50% 50%;

`;
const Footer = styled.div`
  padding: 18px 24px;
  background-color: #FFF;
`;
const Price = styled.p`
  font-size: 20px;
`;
const ImageCard = ({id, images, embed_url}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        {/* <Overlay className='imageOverlay' /> */}
        <EmbedGif embed_url={embed_url} />
      </ImageWrapper>
    </Wrapper>
  );
}

export default ImageCard;