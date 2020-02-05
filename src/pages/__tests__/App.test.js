import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App';

describe('App', () => {
  it('should have router', () => {
    const output = mount(<App />);
    expect(output.find(Router).exists()).toBe(true);
  });
  it('should have two routes', () => {
    const output = mount(<App />);
    expect(output.find(Route).length).toBe(2);
  });
});
