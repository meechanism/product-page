import React from 'react';
import { MemoryRouter } from 'react-router';

import ProductDetails from '../ProductDetails';
import ProductNotFound from '../ProductNotFound';

// This can only be mocked once and we cannot make productId be dynamic, which
// is why this page has two tests
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    productId: 'invalid-id'
  })
}));

describe('ProductDetails (invalid case)', () => {
  it('should return ProductNotFound for invalid product id', () => {
    const output = mount(
      <MemoryRouter>
        <ProductDetails />
      </MemoryRouter>
    );

    expect(output.find(ProductNotFound).exists()).toBe(true);
  });
});
