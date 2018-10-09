import { connect } from 'react-redux';
import { getAvailableLanguages } from '../selectors/products';
import { setLanguageFilter } from '../actions/languageFilter';
import LanguageFilter from '../components/LanguageFilter';

const mapStateToProps = state => ({
  languages: getAvailableLanguages(state),
  activeLanguageFilter: state.activeLanguageFilter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: filter => () => dispatch(setLanguageFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageFilter);
