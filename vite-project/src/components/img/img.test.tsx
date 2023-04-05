import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './img';

describe('Img', () => {
  it('renders img', () => {
    render(<Img src="none" className="test" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('generates correct class name', () => {
    render(<Img src="none" className="test" />);
    expect(screen.getByRole('img')).toHaveClass('test__img');
  });
});
