import React from 'react';
import { render, screen } from '@testing-library/react';
import CardItem from './index';

describe('Card item', () => {
  it('renders cart item', () => {
    render(<CardItem label="testLabel" data="testData" />);
    expect(screen.getByText('testLabel')).toBeInTheDocument();
    expect(screen.getByText('testData')).toBeInTheDocument();
  });
});
