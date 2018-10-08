import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactList from '../../containers/ContactList';
import Conversation from '../../containers/Conversation';

import './index.css';

class App extends Component {
  componentDidMount() {
    const { getContactList } = this.props;
    getContactList();
  }

  render() {
    return (
      <div className="app container">
        <div className="row">
          <ContactList className="col-4" />
          <Conversation className="col-8" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getContactList: PropTypes.func.isRequired,
};

export default App;
