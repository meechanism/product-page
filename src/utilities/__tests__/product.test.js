import { getProductById } from '../product';

describe('utility: getProductById', () => {
  it('should return undefined by default', () => {
    expect(getProductById()).toBe(undefined);
  });

  it('should return undefined for invalid product', () => {
    expect(getProductById('fake-id')).toBe(undefined);
  });

  it('should return product for valid product', () => {
    const id = 'belgian-linen-embroidery-duvet-cover-shams-white-flax-b3025';
    const resp = getProductById(id);
    expect(resp).toBeTruthy();
    expect(resp.id === id).toBeTruthy();
  });
});
