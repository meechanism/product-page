import React from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';
import Text from '../components/Text';

const ProductNotFound = () => {
  return (
    <PageWrapper>
      <h1>Oops!</h1>
      <Text>
        Sorry, we couldn't find that product. Please contact customer support if
        you need assistance.
      </Text>
      <Text>
        In the meantime, you can <Link to="/">continue shopping</Link>.
      </Text>
    </PageWrapper>
  );
};

export default ProductNotFound;
