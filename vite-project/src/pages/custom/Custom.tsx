import React from 'react';
import AddForm from '../../components/add-card-form/Form';
import NewForm from '../../components/add-card-form/new-form';
import TilesList from '../../components/tiles-list/tiles-list';
import NodeType from '../../types/node';

export default class Custom extends React.Component<object, { nodes: NodeType[] }> {
  resData: NodeType[] = [];

  constructor(props: object | Readonly<object>) {
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
        <NewForm onFormSubmit={this.handleFormSubmit} />
        {/* <AddForm onFormSubmit={this.handleFormSubmit} /> */}
        <TilesList nodes={this.state.nodes} />
      </>
    );
  }
}
