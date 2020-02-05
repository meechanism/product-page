import React from 'react';
import { MemoryRouter } from 'react-router';
import he from 'he';

import ProductDetails, {
  ProductName,
  Price,
  onAddToCart
} from '../ProductDetails';
import ProductAssets from '../../components/ProductAssets';
import productData from '../../data/products';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    productId: 'belgian-linen-embroidery-duvet-cover-shams-white-flax-b3025'
  })
}));

describe('ProductDetails', () => {
  const product = productData.groups[1];
  const mockFn = jest.fn();

  it('should render ProductAssets', () => {
    const output = mount(
      <MemoryRouter>
        <ProductDetails />
      </MemoryRouter>
    );
    expect(output.find(ProductAssets).exists()).toBe(true);
  });

  it('should render decoded product name', () => {
    const output = mount(
      <MemoryRouter>
        <ProductDetails />
      </MemoryRouter>
    );
    expect(output.find(ProductName).text()).toBe(he.decode(product.name));
  });

  it('should render product price range', () => {
    const output = mount(
      <MemoryRouter>
        <ProductDetails />
      </MemoryRouter>
    );
    const price = output.find(Price);
    expect(price.exists()).toBeTruthy();
    const selling = product.priceRange.selling;
    expect(price.text()).toBe(`$${selling.low} - $${selling.high}`);
  });

  it('should update add to cart state', () => {
    onAddToCart(mockFn)();
    expect(mockFn).toHaveBeenCalledWith(true);
  });
});
