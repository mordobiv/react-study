import React from 'react';
import AddForm from '../../components/add-card-form/Form';
import TilesList from '../../components/tiles-list/tiles-list';
import NodeType from '../../types/node';

export default class Custom extends React.Component {
  resData = [];

  constructor(props) {
    super(props);
    this.state = { nodes: [] };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(data: NodeType) {
    this.resData.push(data);
    this.setState({ nodes: this.resData });
  }

  render() {
    return (
      <>
        <AddForm onFormSubmit={this.handleFormSubmit} />
        <TilesList nodes={this.state.nodes} />
      </>
    );
  }
}
