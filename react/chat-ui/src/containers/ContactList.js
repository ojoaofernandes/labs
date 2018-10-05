import { connect } from 'react-redux';
import ContactList from '../components/ContactList';

const mapStateToProps = ({ contactList }) => ({
  contacts: contactList,
});

export default connect(mapStateToProps)(ContactList);
