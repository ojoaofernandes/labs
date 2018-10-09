import { connect } from 'react-redux';
import LanguageFilter from '../components/LanguageFilter';

const mapStateToProps = () => ({
  languages: ['EN', 'PT', 'FR'],
});

export default connect(mapStateToProps)(LanguageFilter);
