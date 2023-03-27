import React from 'react';
import inputType from '../../types/input';

export default class Select extends React.Component<inputType> {
  render() {
    return (
      <>
        <label>{this.props.label}: </label>
        <select defaultValue={''} ref={this.props.refValue}>
          <option value="" hidden>
            Choose here
          </option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
        </select>
        {this.props.isError && <p>Error</p>}
      </>
    );
  }
}
