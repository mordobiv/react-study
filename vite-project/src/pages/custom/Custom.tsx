import React, { useState } from 'react';
import AddForm from '../../components/add-card-form/Form.tsx';
import TilesList from '../../components/tiles-list/tiles-list';
import NodeType from '../../types/node';

export default function Custom() {
  const [nodesList, useNodes] = useState<NodeType[]>([]);

  function HandleFormSubmit(data: NodeType) {
    useNodes((nodesList) => [...nodesList, data]);
  }

  return (
    <>
      <AddForm onFormSubmit={HandleFormSubmit} />
      <TilesList nodes={nodesList} />
    </>
  );
}
