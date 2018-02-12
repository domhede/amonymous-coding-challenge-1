import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchImages, filterImages, clearFilter } from 'data/actions/imageActions';

import App from './component.js';



const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchImages,
    filterImages,
    clearFilter
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(App);