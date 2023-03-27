import React from 'react';
import inputType from '../../types/input';

export default class Text extends React.Component<inputType> {
  render() {
    return (
      <>
        <label>{this.props.label}:</label>
        <input type="text" ref={this.props.refValue} />
        {this.props.isError && <p>Error</p>}
      </>
    );
  }
}
