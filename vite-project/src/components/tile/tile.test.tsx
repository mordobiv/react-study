import React from 'react';
import { render, screen } from '@testing-library/react';
import Tile from './tile';

const testNode = {
  id: 1,
  name: 'Rick',
  status: 'Alive',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  created: '2017-11-04T18:48:46.250Z',
  gender: 'Male',
};

describe('Tile', () => {
  it('renders tile', () => {
    render(<Tile node={testNode} />);
    expect(screen.getByText(/rick/i)).toBeInTheDocument();
  });
});
