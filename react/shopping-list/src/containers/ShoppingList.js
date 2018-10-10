import { connect } from 'react-redux';
import ShoppingList from '../components/ShoppingList';

const mapStateToProps = ({ shoppingList }) => ({
  products: shoppingList,
});

export default connect(mapStateToProps)(ShoppingList);
