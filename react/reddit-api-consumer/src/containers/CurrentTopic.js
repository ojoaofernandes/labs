import { connect } from 'react-redux';
import CurrentTopic from '../components/CurrentTopic';

const mapStateToProps = ({ currentTopic }) => ({ topic: currentTopic });

export default connect(mapStateToProps)(CurrentTopic);
