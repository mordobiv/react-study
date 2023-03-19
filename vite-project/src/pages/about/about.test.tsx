import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders about page', () => {
    render(<About />);
    expect(screen.getByText(/About us page/i)).toBeInTheDocument();
  });
});
