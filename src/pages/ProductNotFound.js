import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const ProductNotFound = () => {
  return (
    <PageWrapper>
      <h1>Oops!</h1>
      <p>
        Sorry, we couldn't find that product. Please contact customer support if
        you need assistance.
      </p>
      <p>
        In the meantime, you can <Link to="/">continue shopping</Link>.
      </p>
    </PageWrapper>
  );
};

export default ProductNotFound;
