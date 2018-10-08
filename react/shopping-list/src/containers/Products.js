import { connect } from 'react-redux';
import Products from '../components/Products';

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Products);
