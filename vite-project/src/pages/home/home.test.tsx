import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it("renders home page's elements", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

});
