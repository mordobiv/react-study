import React from 'react';
import inputType from '../../types/input';

export default class DatePicker extends React.Component<inputType> {
  render() {
    return (
      <>
        <label>{this.props.label}: </label>
        <input type="date" ref={this.props.refValue} />
        {this.props.isError && <p>Error</p>}
      </>
    );
  }
}
