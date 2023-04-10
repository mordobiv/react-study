import React, { useState } from 'react';
import AddForm from '../../components/add-card-form/Form';
import TilesList from '../../components/tiles-list/tiles-list';
import NodeType from '../../types/node';

export default function Custom() {
  const [nodesList, setNodes] = useState<NodeType[]>([]);

  function HandleFormSubmit(data: NodeType) {
    setNodes((nodesList) => [...nodesList, data]);
  }

  return (
    <>
      <AddForm onFormSubmit={HandleFormSubmit} />
      <TilesList nodes={nodesList} />
    </>
  );
}
