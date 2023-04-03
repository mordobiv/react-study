import React from 'react';
import Tile from '../tile/tile';
import NodeType from '../../types/node';

export default function TilesList(props: { nodes: NodeType[] }) {
  console.log(1);
  return (
    <div className="tiles">
      {props.nodes.map((node: NodeType) => (
        <Tile key={node.id} node={node} />
      ))}
    </div>
  );
}
