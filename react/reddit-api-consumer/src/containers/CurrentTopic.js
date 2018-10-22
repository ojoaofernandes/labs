import { connect } from 'react-redux';
import CurrentTopic from '../components/CurrentTopic';

const mapStateToProps = ({ currentTopic }) => ({
  topic: currentTopic.topic,
  fetchedAt: currentTopic.fetchedAt,
});

export default connect(mapStateToProps)(CurrentTopic);
