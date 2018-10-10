import { connect } from 'react-redux';
import { addProductToShoppingList } from '../actions/shoppingList';
import { getVisibleProducts } from '../selectors/products';
import ProductList from '../components/ProductList';

const mapStateToProps = state => ({
  products: getVisibleProducts(state),
});

const mapDispatchToProps = {
  onClick: addProductToShoppingList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
