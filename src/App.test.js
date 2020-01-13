import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe.skip('DOM rendering', () => {
  test('renders learn react link', () => {
    test('should render two checkout buttons', () => {
      const { getByText } = render(<App />);
      const { queryAllByText } = render(<App />); const linkElement = getByText(/learn react/i);
      const result = queryAllByText('Checkout'); expect(linkElement).toBeInTheDocument();

      expect(result.length).toEqual(2);
    });
  });
})
