import React from 'react';
import { selectType } from '../../types/input';
import ValidationError from '../validation-error/validation-error';

export default class Select extends React.Component<selectType> {
  render() {
    return (
      <div className="form__field">
        <label className="form__label">{this.props.label}: </label>
        <select defaultValue={''} ref={this.props.refValue}>
          <option value="" hidden>
            Choose here
          </option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
        </select>
        {this.props.isError && <ValidationError message="Select a specie" />}
      </div>
    );
  }
}
