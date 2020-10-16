import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders I was Changed on the feature branch link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I was Changed on the feature branch/i);
  expect(linkElement).toBeInTheDocument();
});



