import React from 'react';
import inputType from '../../types/input';
import ValidationError from '../validation-error/validation-error';

export default class DatePicker extends React.Component<inputType> {
  render() {
    return (
      <div className="form__field">
        <label className="form__label">{this.props.label}: </label>
        <input type="date" ref={this.props.refValue} />
        {this.props.isError && <ValidationError message="Select a date" />}
      </div>
    );
  }
}
