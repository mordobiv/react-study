import React from 'react';
import inputType from '../../types/input';
import ValidationError from '../validation-error/validation-error';

export default function File(props: inputType) {
  return (
    <div className="form__field">
      <label className="form__label">{props.label}:</label>
      <input type="file" accept="image/*" ref={props.refValue} />
      {props.isError && <ValidationError message="Upload an image" />}
    </div>
  );
}
