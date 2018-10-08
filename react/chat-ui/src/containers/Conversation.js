import { connect } from 'react-redux';
import { closeConversation } from '../actions/conversations';
import Conversation from '../components/Conversation';

const mapStateToProps = ({ conversation }) => ({ conversation });
const mapDispatchToProps = { closeConversation };

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
