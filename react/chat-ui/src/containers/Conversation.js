import { connect } from 'react-redux';
import Conversation from '../components/Conversation';

const mapStateToProps = ({ conversation }) => ({ conversation });

export default connect(mapStateToProps)(Conversation);
