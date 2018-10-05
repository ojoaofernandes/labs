import { connect } from 'react-redux';
import App from '../components/App';
import { getContactList } from '../actions/contactList';

const mapDispatchToProps = { getContactList };

export default connect(null, mapDispatchToProps)(App);
