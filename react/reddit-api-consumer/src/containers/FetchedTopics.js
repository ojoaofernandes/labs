import { connect } from 'react-redux';
import FetchedTopics from '../components/FetchedTopics';

const mapStateToProps = ({ fetchedTopics }) => ({ topics: fetchedTopics });

export default connect(mapStateToProps)(FetchedTopics);
