import React from 'react';
import data from '../../assets/data';
import SearchInput from '../../components/search-input/search-input';
import TilesList from '../../components/tiles-list/tiles-list';
// import Tile from '../../components/tile/tile';

export default class Home extends React.Component {
  nodes = getNodes();

  render() {
    return (
      <div className="App">
        <SearchInput />
        <TilesList nodes={this.nodes} />
      </div>
    );
  }
}

function getNodes() {
  return data;
}
