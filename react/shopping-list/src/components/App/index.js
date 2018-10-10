import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../Products';
import SessionTime from '../../containers/SessionTime';
import ShoppingList from '../../containers/ShoppingList';
import './index.css';

class App extends Component {
  componentDidMount() {
    const { getProducts, incrementSessionTime } = this.props;
    getProducts();
    this.interval = setInterval(
      incrementSessionTime,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="app container-fluid">
        <div className="row">
          <Products className="col-5" />
          <ShoppingList className="col-7" />
        </div>

        <SessionTime />
      </div>
    );
  }
}

App.propTypes = {
  getProducts: PropTypes.func.isRequired,
  incrementSessionTime: PropTypes.func.isRequired,
};

export default App;
