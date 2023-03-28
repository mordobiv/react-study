import React from 'react';
import inputType from '../../types/input';
import ValidationError from '../validation-error/validation-error';

export default class File extends React.Component<inputType, object> {
  render() {
    return (
      <div className="form__field">
        <label className="form__label">{this.props.label}:</label>
        <input type="file" accept="image/*" ref={this.props.refValue} />
        {this.props.isError && <ValidationError message="Upload an image" />}
      </div>
    );
  }
}
