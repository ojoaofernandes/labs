import { connect } from 'react-redux';
import Search from '../components/Search';

const mapDispatchToProps = {
  searchHandler: (e) => {
    console.log(e);
    return { type: '' };
  },
};

export default connect(null, mapDispatchToProps)(Search);
