import { connect } from 'react-redux';
import Contact from '../components/Contact';
import { openConversation } from '../actions/conversations';

const mapDispatchToProps = { openConversation };

export default connect(null, mapDispatchToProps)(Contact);
