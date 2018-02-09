import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchImages } from '../../data/actions/imageActions';

import App from './component.js';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchImages
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(App);