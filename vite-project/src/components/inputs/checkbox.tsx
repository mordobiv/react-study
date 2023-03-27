import React from 'react';
import inputType from '../../types/input';

export default class Checkbox extends React.Component<inputType> {
  render() {
    return (
      <>
        <label>{this.props.label}: </label>
        <input type="checkbox" ref={this.props.refValue} />
      </>
    );
  }
}
