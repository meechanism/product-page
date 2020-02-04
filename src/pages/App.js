import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';

const App = () => (
  <Router>
    <Route path="/" exact component={AllProducts} />
    <Route path="/details/:productId" component={ProductDetails} />
  </Router>
);
export default App;
