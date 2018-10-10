import { connect } from 'react-redux';
import { getShoppingListTotal } from '../selectors/shoppingList';
import ProductTable from '../components/ProductTable';

const mapStateToProps = state => ({
  products: state.shoppingList,
  total: getShoppingListTotal(state)
});

export default connect(mapStateToProps)(ProductTable);
