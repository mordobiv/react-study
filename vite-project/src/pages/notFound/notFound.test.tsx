import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('Not Found', () => {
  it('renders not found page', () => {
    render(<NotFound />);
    expect(screen.getByText(/404 Not FOUND/i)).toBeInTheDocument();
  });
});
