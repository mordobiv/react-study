import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './index';

describe('Error', () => {
  it('renders error', () => {
    render(<Error message="error" />);
    expect(screen.getByText('error')).toBeInTheDocument();
  });
});
