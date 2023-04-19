import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it("renders home page's elements", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('apply filter', () => {
    render(<Home />);
    const search = screen.getByPlaceholderText(/search/i);
    fireEvent.change(search, { target: { value: 'Rick' } });
    fireEvent.keyPress(search, 'Enter');
    expect(screen.getByText(/Rick/i)).toBeInTheDocument();
  });
});
