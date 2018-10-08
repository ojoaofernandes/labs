import React, { Component } from 'react';
import Products from '../Products';

class App extends Component {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Products className="col-2" />
        </div>
      </div>
    );
  }
}

export default App;
