import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './search-input';

describe('Seach', () => {
  it('renders search', () => {
    render(<SearchInput handleSearchFilter={() => 1} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('stores value', async () => {
    render(<SearchInput handleSearchFilter={() => 1} />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'test string' } });
    expect(screen.getByRole('textbox')).toHaveValue('test string');
  });
});
