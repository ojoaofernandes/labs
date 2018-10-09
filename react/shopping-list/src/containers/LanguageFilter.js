import { connect } from 'react-redux';
import LanguageFilter from '../components/LanguageFilter';

const mapStateToProps = () => ({
  languages: ['ALL', 'EN', 'PT', 'FR'],
  activeLanguageFilter: 'ALL',
});

export default connect(mapStateToProps)(LanguageFilter);
