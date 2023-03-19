import React from 'react';
import data from '../assets/data';
import SearchInput from '../components/search-input';
import Tile from '../components/tile/tile';

export default class Home extends React.Component {
  nodes = getNodes();

  render() {
    return (
      <div className="App">
        <SearchInput />
        <div className="tiles">
          {this.nodes.map((node) => (
            <Tile key={node.id} node={node} />
          ))}
        </div>
      </div>
    );
  }
}

function getNodes() {
  return data;
}
