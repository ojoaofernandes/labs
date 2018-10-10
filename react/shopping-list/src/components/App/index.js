import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../../containers/Products';
import ShoppingList from '../ShoppingList';

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
      <div className="container-fluid">
        <div className="row">
          <Products className="col-5" />
          <ShoppingList className="col-7" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getProducts: PropTypes.func.isRequired,
  incrementSessionTime: PropTypes.func.isRequired,
};

export default App;
