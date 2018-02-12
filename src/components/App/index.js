import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchImages, fetchMoreImages } from '../../data/actions/imageActions';

import App from './component.js';

const mapStateToProps = ({images}) => ({
  offset: images.offset
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchImages,
    fetchMoreImages
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);