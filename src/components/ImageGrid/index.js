import { connect } from 'react-redux';
import ImageGrid from './component';

const mapStateToProps = ({images}) => ({
  images: images.filtered
});

export default connect(mapStateToProps, null)(ImageGrid);