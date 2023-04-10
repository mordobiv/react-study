import React from 'react';
import Tile from '../tile/tile';
import NodeType from '../../types/node';

export default function TilesList(props: { nodes: NodeType[]; setIsModalOpen: any }) {
  return (
    <div className="tiles">
      {props.nodes.map((node: NodeType) => (
        <Tile setIsModalOpen={props.setIsModalOpen} key={node.id} node={node} />
      ))}
    </div>
  );
}
