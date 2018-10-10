import { connect } from 'react-redux';
import App from '../components/App';
import { getProducts } from '../actions/products';
import { incrementSessionTime } from '../actions/sessionTime';

const mapDispatchToProps = {
  getProducts,
  incrementSessionTime,
};

export default connect(null, mapDispatchToProps)(App);
