import { connect } from 'react-redux';
import Products from '../components/Products';
import { getVisibleProductsSelector } from '../selectors/products';

const mapStateToProps = state => ({
  products: getVisibleProductsSelector(state),
});

export default connect(mapStateToProps)(Products);
