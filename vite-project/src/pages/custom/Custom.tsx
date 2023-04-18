import React from 'react';
import AddForm from '../../components/add-card-form/Form';
import TilesList from '../../components/tiles-list/tiles-list';
import { useAppSelector } from '../../store/hooks';

export default function Custom() {
  const nodesList = useAppSelector((state) => state.formReducer.cards);

  return (
    <>
      <AddForm />
      <TilesList nodes={nodesList} />
    </>
  );
}
