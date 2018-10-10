import { connect } from 'react-redux';
import { getVisibleProducts } from '../selectors/products';
import Products from '../components/Products';

const mapStateToProps = state => ({
  products: getVisibleProducts(state),
});

export default connect(mapStateToProps)(Products);
