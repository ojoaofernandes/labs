import { connect } from 'react-redux';
import PostList from '../components/PostList';

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(PostList);
