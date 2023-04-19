import React from 'react';
import Tile from '../tile/tile';
import NodeType from '../../types/node';

export default function TilesList({ nodes }: { nodes: NodeType[] }) {
  return (
    <div className="tiles">
      {nodes.map((node: NodeType) => (
        <Tile key={node.id} node={node} />
      ))}
    </div>
  );
}
