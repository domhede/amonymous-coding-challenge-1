import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMoreImages } from 'data/actions/imageActions';

import ImageGrid from './component';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchMoreImages,
  }, dispatch)
);

const mapStateToProps = ({images}) => ({
  images: images.filtered,
  offset: images.offset
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);