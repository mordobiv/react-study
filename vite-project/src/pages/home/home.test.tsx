import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it("renders home page's elements", () => {
    render(<Home />);
    expect(screen.getAllByText(/rick/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('renders all tiles', () => {
    render(<Home />);
    expect(screen.getAllByRole('img')).toHaveLength(8 * 3);
  });
});
