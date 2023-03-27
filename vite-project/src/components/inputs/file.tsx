import React from 'react';
import inputType from '../../types/input';

export default class File extends React.Component<inputType> {
  render() {
    return (
      <>
        <label>{this.props.label}:</label>
        <input type="file" accept="image/*" ref={this.props.refValue} />
        {this.props.isError && <p>Error</p>}
      </>
    );
  }
}
