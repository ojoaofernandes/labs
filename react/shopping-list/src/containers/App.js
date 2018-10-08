import { connect } from 'react-redux';
import App from '../components/App';
import { getProducts } from '../actions/products';

const mapDispatchToProps = { getProducts };

export default connect(null, mapDispatchToProps)(App);
