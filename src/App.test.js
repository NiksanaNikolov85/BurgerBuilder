import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe.skip('DOM rendering', () => {
  test('should render two checkout buttons', () => {
    const { queryAllByText } = render(<App />);
    const result = queryAllByText('Checkout');

    expect(result.length).toEqual(2);
  });
});




