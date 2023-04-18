import React from 'react';
import AddForm from '../../components/add-card-form/Form';
import TilesList from '../../components/tiles-list/tiles-list';
import { useSelector } from 'react-redux';

export default function Custom() {
  const nodesList = useSelector((state) => state.formReducer.cards);

  return (
    <>
      <AddForm />
      <TilesList nodes={nodesList} />
    </>
  );
}
