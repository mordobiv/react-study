import React from 'react';
import inputType from '../../types/input';
import ValidationError from '../validation-error/validation-error';

export default class Radio extends React.Component<inputType> {
  render() {
    return (
      <div className="form__field">
        <label className="form__label">{this.props.label}: </label>
        <span ref={this.props.refValue}>
          <span>Male</span>
          <input type="radio" id="male" name="gender" value="male" />
          <span>Female</span>
          <input type="radio" id="female" name="gender" value="female" />
          {this.props.isError && <ValidationError message="Select a gender" />}
        </span>
      </div>
    );
  }
}
