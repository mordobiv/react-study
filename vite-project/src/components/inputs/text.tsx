import React from 'react';
import inputType from '../../types/input';
import ValidationError from '../validation-error/validation-error';

export default class Text extends React.Component<inputType> {
  render() {
    return (
      <div className="form__field">
        <label className="form__label">{this.props.label}:</label>
        <input type="text" ref={this.props.refValue} />
        {this.props.isError && <ValidationError message="Specify a name" />}
      </div>
    );
  }
}
