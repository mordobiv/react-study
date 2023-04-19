import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidationError from './validation-error';

describe('Validation error', () => {
  it('renders validation error', () => {
    render(<ValidationError message="validationError" />);
    expect(screen.getByText(/validationError/i)).toBeInTheDocument();
  });
});
