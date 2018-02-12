import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'helpers/style-utils';
import { ClipLoader } from 'react-spinners';

const Wrapper = styled.div`
  border: 1px solid #dcdcdd;
  padding: 10px 10px 20px;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Loader = styled.div`
  margin: auto;
`;
const Gif = styled.div`
  width: 100%;
  height:0;
  padding-bottom: 56%;
  position:relative;
  display: ${props => props.loading ? 'none' : 'inherit'}
`;
const Iframe = styled.iframe`
  position: absolute;
`;
class EmbedGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.showImage = this.showImage.bind(this);
  }
  showImage() {
    this.setState({
      loading: false
    })
  }
  render() {
    const { loading } = this.state;

    return (
      <Wrapper>
        {loading &&
          <Loader>
            <ClipLoader
              color={'#6157ff'}
              loading
            />
          </Loader>
        }
        <Gif loading={loading}>
          <Iframe
            src={this.props.embed_url}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            onLoad={() => this.showImage()}
          />
        </Gif>
      </Wrapper>
    )

    return (
      <Wrapper>

    </Wrapper>

    );
  }
}

export default EmbedGif;

