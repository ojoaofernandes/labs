import { connect } from 'react-redux';
import KeyPressInput from '../components/KeyPressInput';

const mapDispatchToProps = {
  onKeyPress: (e) => {
    console.log(e);
    return { type: '' };
  },
};

export default connect(null, mapDispatchToProps)(KeyPressInput);
