import React from 'react';
import { render } from '@testing-library/react';

import Home from './home';

describe('Home view', () => {
  test('should show "Home"', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home').textContent).toBe('Home');
  });
});
