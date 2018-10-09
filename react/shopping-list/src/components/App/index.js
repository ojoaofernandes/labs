import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../../containers/Products';

class App extends Component {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Products className="col-5" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

export default App;
