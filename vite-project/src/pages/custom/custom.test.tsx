import React from 'react';
import { render, screen } from '@testing-library/react';
import Custom from './Custom';

describe('Custom', () => {
  it("renders custom page's elements", () => {
    render(<Custom />);
    expect(screen.getAllByText(/name/i)).toBeTruthy();
    expect(screen.getAllByText(/specie/i)).toBeTruthy();
  });
});
