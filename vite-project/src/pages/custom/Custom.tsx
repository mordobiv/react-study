import React from 'react';
import AddForm from '../../components/add-card-form/Form';
import TilesList from '../../components/tiles-list/tiles-list';

export default class Custom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nodes: [] };
  }

  render() {
    return (
      <>
        <AddForm />
        <TilesList nodes={this.state.nodes} />
      </>
    );
  }
}
