import React from 'react';
import Tile from '../tile/tile';
import NodeType from '../../types/node';

export default class TilesList extends React.Component<{ nodes: NodeType[] }> {
  render() {
    return (
      <div className="tiles">
        {this.props.nodes.map((node: NodeType) => (
          <Tile key={node.id} node={node} />
        ))}
      </div>
    );
  }
}
