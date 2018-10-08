import { connect } from 'react-redux';
import { getContactList } from '../actions/contactList';
import ContactList from '../components/ContactList';

const mapStateToProps = ({ contactList }) => ({
  contacts: contactList,
});

const mapDispatchToProps = dispatch => ({
  filterContactList: (event) => {
    dispatch(getContactList(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
